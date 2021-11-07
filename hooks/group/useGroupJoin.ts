import axios from 'axios';
import useAuth from 'hooks/auth/useAuth';
import {useState} from 'react';
import {useMutation} from 'react-query';
import getCommonError from 'utils/api/getCommonError';
import {API_URL} from 'utils/api/_constants';

const useGroupJoin = (callback?: () => void) => {
  const {userData} = useAuth();
  const [error, setError] = useState('');

  const groupJoinMutation = useMutation(
    (groupId: string) => {
      return axios.patch(
        `${API_URL}/meetings/${groupId}/join`,
        {user_id: userData._id},
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
    joinGroup: groupJoinMutation.mutate,
    isLoading: groupJoinMutation.isLoading,
    error: error,
  };
};

export default useGroupJoin;
