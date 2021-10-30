import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  Link,
} from '@chakra-ui/react';
import useAuth from 'hooks/auth/useAuth';
import useLogin from 'hooks/auth/useLogin';
import usePageMove from 'hooks/usePageMove';
import {useForm} from 'react-hook-form';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const {pageMove, pageMoveWithRedirect, getRedirect} = usePageMove();
  const {login, isLogining, loginResponseData} = useLogin(() => {
    pageMove('/main');
  });
  const {isLoggedIn} = useAuth();

  if (isLoggedIn) {
    const redirect = getRedirect();
    if (redirect) {
      pageMove(redirect);
    } else {
      pageMove('/main');
    }
  }

  const onSubmit = (loginData: {email: string; password: string}) => {
    return login(loginData);
  };

  return (
    <Box className='loginBox' maxWidth='320px' marginX='auto'>
      <Heading paddingY='10' size='md' textAlign='center'>
        로그인
      </Heading>
      <form style={{width: '100%'}} onSubmit={handleSubmit(onSubmit)}>
        <FormControl marginBottom='2'>
          <Input
            id='email'
            placeholder='이메일을 입력해주세요'
            {...register('email', {required: '이메일을 입력해주세요'})}
          />
          <FormErrorMessage>
            {errors.email && errors.email.message}
          </FormErrorMessage>
        </FormControl>
        <FormControl marginBottom='2'>
          <Input
            id='password'
            placeholder='비밀번호를 입력해주세요'
            type='password'
            {...register('password', {required: '비밀번호를 입력해주세요'})}
          />
        </FormControl>
        <FormControl
          isInvalid={
            errors.email || errors.password || loginResponseData?.data.error
          }
        >
          <FormErrorMessage>
            {errors.email ?
              errors.email.message :
              errors.password ?
              errors.password.message :
              loginResponseData?.data.error ?
              loginResponseData.data.error :
              ''}
          </FormErrorMessage>
        </FormControl>
        <Flex justifyContent='space-between'>
          <Link fontSize='sm' onClick={() => pageMoveWithRedirect('/register')}>
            회원가입
          </Link>
          <Link fontSize='sm'>아이디/비밀번호 찾기</Link>
        </Flex>
        <Button
          width='full'
          height='12'
          marginTop='8'
          isLoading={isLogining}
          type='submit'
        >
          로그인
        </Button>
      </form>
    </Box>
  );
};

export default LoginForm;
