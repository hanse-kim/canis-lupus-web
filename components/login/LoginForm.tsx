import {
  Box,
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  Link,
} from '@chakra-ui/react';
import useLogin from 'hooks/useLogin';
import usePageMove from 'hooks/usePageMove';
import {useForm} from 'react-hook-form';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: {errors, isSubmitting},
  } = useForm();
  const {login} = useLogin();
  const {pageMove, getRedirect} = usePageMove();

  const onSubmit = (values: {email: string; password: string}) => {
    return new Promise(() => {
      setTimeout(() => {
        login(values);
        const redirect = getRedirect();
        if (redirect) {
          pageMove(redirect as string);
        } else {
          pageMove('/main');
        }
      }, 1000);
    });
  };

  return (
    <Box className='loginBox' maxWidth='320px' marginX='auto'>
      <Heading paddingY='10' size='md' textAlign='center'>
        로그인
      </Heading>
      <form style={{width: '100%'}} onSubmit={handleSubmit(onSubmit)}>
        <FormControl marginBottom='2' isInvalid={errors.email}>
          <Input
            id='email'
            placeholder='이메일을 입력해주세요'
            {...register('email', {required: 'This is required'})}
          />
        </FormControl>
        <FormControl marginBottom='2' isInvalid={errors.password}>
          <Input
            id='password'
            placeholder='비밀번호를 입력해주세요'
            type='password'
            {...register('password', {required: 'This is required'})}
          />
        </FormControl>
        <Flex justifyContent='space-between'>
          <Link fontSize='sm'>회원가입</Link>
          <Link fontSize='sm'>아이디/비밀번호 찾기</Link>
        </Flex>
        <Button
          width='full'
          height='12'
          marginTop='8'
          isLoading={isSubmitting}
          type='submit'
        >
          로그인
        </Button>
      </form>
    </Box>
  );
};

export default LoginForm;
