import axios from 'axios';
import useAuth from 'hooks/auth/useAuth';
import {useState} from 'react';
import {useMutation} from 'react-query';
import getCommonError from 'utils/api/getCommonError';
import {API_URL} from 'utils/api/_constants';

const useLike = (callback?: () => void) => {
  const {userData} = useAuth();
  const [error, setError] = useState('');
  const likeMutation = useMutation(
    (data: {postId: string; userId: string}) => {
      return axios.patch(
        `${API_URL}/posts/${data.postId}/likes`,
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
    like: likeMutation.mutate,
    isLoading: likeMutation.isLoading,
    postError: error,
  };
};

export default useLike;
