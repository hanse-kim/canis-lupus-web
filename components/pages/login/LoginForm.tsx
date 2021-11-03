import {
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Link,
  Stack,
} from '@chakra-ui/react';
import {Button} from 'components/common/_basic';
import {FormInput} from 'components/form/formContent/sub/RegisterFormItems';
import Logo from 'components/layout/Header/Logo';
import useAuth from 'hooks/auth/useAuth';
import useLogin from 'hooks/auth/useLogin';
import usePageMove from 'hooks/usePageMove';
import React, {useState} from 'react';
import {useForm} from 'react-hook-form';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const {pageMove, pageMoveWithRedirect, getRedirect} = usePageMove();
  const {login, isLogining, loginError} = useLogin(() => {
    pageMove('/main');
  });
  const {isLoggedIn} = useAuth();
  const [email, setEmail] = useState('');
  const [passwrod, setPassword] = useState('');

  if (isLoggedIn) {
    const redirect = getRedirect();
    if (redirect) {
      pageMove(redirect);
    } else {
      pageMove('/main');
    }
  }

  const onSubmit = (loginData: {email: string; password: string}) => {
    if (Object.values(loginData).some((value) => !value)) {
      return;
    }

    return login(loginData);
  };

  const getError = () => {
    if (errors.email) {
      return errors.email.message;
    } else if (errors.password) {
      return errors.password.message;
    } else if (loginError) {
      return loginError;
    } else {
      return '';
    }
  };

  return (
    <Stack
      className='loginBox'
      maxWidth='360px'
      paddingY='140px'
      marginX='auto'
      alignItems='center'
      spacing='24px'
    >
      <Logo height='32px' />
      <form style={{width: '100%'}} onSubmit={handleSubmit(onSubmit)}>
        <FormControl marginBottom='20px'>
          <FormLabel marginBottom='8px' fontWeight='bold'>
            이메일
          </FormLabel>
          <FormInput
            id='email'
            placeholder='이메일을 입력해주세요'
            {...register('email', {required: '이메일을 입력해주세요'})}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl marginBottom='12px'>
          <FormLabel marginBottom='8px' fontWeight='bold'>
            비밀번호
          </FormLabel>
          <FormInput
            id='password'
            placeholder='비밀번호를 입력해주세요'
            type='password'
            {...register('password', {required: '비밀번호를 입력해주세요'})}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </FormControl>
        <FormControl isInvalid={errors.email || errors.password || loginError}>
          <FormErrorMessage>{getError()}</FormErrorMessage>
        </FormControl>
        <Flex justifyContent='space-between'>
          <Link fontSize='sm' onClick={() => pageMoveWithRedirect('/register')}>
            회원가입
          </Link>
          <Link fontSize='sm'>아이디/비밀번호 찾기</Link>
        </Flex>
        <Button
          width='full'
          height='52px'
          marginTop='32px'
          isLoading={isLogining}
          disabled={!email || !passwrod}
          type='submit'
        >
          로그인
        </Button>
      </form>
    </Stack>
  );
};

export default LoginForm;
