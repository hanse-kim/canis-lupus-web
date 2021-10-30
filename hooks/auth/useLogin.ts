import axios from 'axios';
import {useEffect} from 'react';
import {useMutation} from 'react-query';
import {LoginData, UserData, UserToken} from 'types/auth';
import {NextResponse} from 'types/domain';
import decodeJwtToken from 'utils/auth/decodeToken';
import useAuth from './useAuth';

const useLogin = (callback?: () => void) => {
  const {login: authLogin} = useAuth();
  const loginMutation = useMutation((loginData: LoginData) => {
    return axios.post<NextResponse<UserToken>>('/api/auth/login', loginData);
  });

  const login = loginMutation.mutate;
  const isLogining = loginMutation.isLoading;
  const loginResponseData = loginMutation.data;

  useEffect(() => {
    if (
      loginResponseData &&
      !loginResponseData.data.error &&
      loginResponseData.data.data?.token
    ) {
      const token = loginResponseData.data.data.token;
      const userData: UserData =
        decodeJwtToken<{_id: string; name: string}>(token);
      authLogin(userData);
      if (callback) {
        callback();
      }
    }
  }, [authLogin, callback, loginResponseData]);

  return {
    login,
    isLogining,
    loginResponseData,
  };
};

export default useLogin;
