import axios from 'axios';
import {useState} from 'react';
import {useMutation} from 'react-query';
import {LoginData, UserData, UserToken} from 'types/auth';
import getCommonError from 'utils/api/getCommonError';
import decodeJwtToken from 'utils/auth/decodeToken';
import useAuth from './useAuth';

const useLogin = (callback?: () => void) => {
  const {login: authLogin} = useAuth();
  const [error, setError] = useState('');
  const loginMutation = useMutation(
    (loginData: LoginData) => {
      return axios.post<UserToken>('/api/auth/login', loginData);
    },
    {
      onSuccess: (axiosResponse) => {
        const token = axiosResponse.data.token;
        const userData: UserData =
          decodeJwtToken<{_id: string; name: string}>(token);
        authLogin(userData);
        if (callback) {
          callback();
        }
      },
      onError: (e: any) => {
        setError(getCommonError(e));
      },
    }
  );

  return {
    login: loginMutation.mutate,
    isLogining: loginMutation.isLoading,
    loginError: error,
  };
};

export default useLogin;
