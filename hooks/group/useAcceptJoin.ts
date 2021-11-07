import axios from 'axios';
import useAuth from 'hooks/auth/useAuth';
import {useState} from 'react';
import {useMutation} from 'react-query';
import getCommonError from 'utils/api/getCommonError';
import {API_URL} from 'utils/api/_constants';

const useAcceptJoin = (callback?: () => void) => {
  const {userData} = useAuth();
  const [error, setError] = useState('');

  const acceptJoinMutation = useMutation(
    (data: {userId: string; groupId: string}) => {
      return axios.patch(
        `${API_URL}/meetings/${data.groupId}/accept`,
        {user_id: data.userId},
        {
          headers: {
            Authorization: userData.token,
          },
        }
      );
    },
    {
      onSuccess: (axiosResponse) => {
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
    acceptJoin: acceptJoinMutation.mutate,
    isLoading: acceptJoinMutation.isLoading,
    error: error,
  };
};

export default useAcceptJoin;
