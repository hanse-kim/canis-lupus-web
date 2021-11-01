import axios from 'axios';
import {useState} from 'react';
import {useMutation} from 'react-query';
import {RegisterData, UserData, UserToken} from 'types/auth';
import getCommonError from 'utils/api/getCommonError';
import objectToFormData from 'utils/api/objectToFormData';
import {API_URL} from 'utils/api/_constants';
import decodeJwtToken from 'utils/auth/decodeToken';
import useAuth from './useAuth';

const useRegister = (callback?: () => void) => {
  const {login: authLogin} = useAuth();
  const [error, setError] = useState('');
  const registerMutation = useMutation(
    (registerData: RegisterData) => {
      return axios.post<UserToken>(
        `${API_URL}/auth/sign-up`,
        objectToFormData(registerData),
        {
          headers: {
            'Content-Type': `multipart/form-data`,
          },
        }
      );
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
    register: registerMutation.mutate,
    isRegistering: registerMutation.isLoading,
    registerError: error,
  };
};

export default useRegister;
