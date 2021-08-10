import axios from 'axios';
import {useMutation} from 'react-query';

const useLogin = () => {
  const login = useMutation(
      (userData: {id?: string; password?: string}) => {
        return axios.post('/api/login', {params: userData});
      },
      {
        onSuccess: (data) => {
          localStorage.setItem('user-token', data.data.token);
        },
      }
  );

  const logout = useMutation(
      (userData: {id?: string}) => {
        return axios.delete('/api/login', {params: userData});
      },
      {
        onSuccess: () => {
          localStorage.removeItem('user-token');
        },
      }
  );

  let isLoggedIn = false;
  if (typeof window !== 'undefined') {
    isLoggedIn = localStorage.getItem('user-token') !== null;
  }

  return {
    login: login.mutate,
    logout: logout.mutate,
    isLoggedIn: isLoggedIn,
  };
};

export default useLogin;
