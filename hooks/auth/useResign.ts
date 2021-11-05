import axios from 'axios';
import {useState} from 'react';
import {useMutation} from 'react-query';
import getCommonError from 'utils/api/getCommonError';
import {API_URL} from 'utils/api/_constants';
import useAuth from './useAuth';

const useResign = (callback?: () => void) => {
  const {userData, logout} = useAuth();
  const [error, setError] = useState('');
  const registerMutation = useMutation(
    () => {
      return axios.delete(`${API_URL}/users/${userData._id}`, {
        headers: {Authorization: userData.token},
      });
    },
    {
      onSuccess: () => {
        logout();
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
    resign: registerMutation.mutate,
    isResigning: registerMutation.isLoading,
    resignError: error,
  };
};

export default useResign;
