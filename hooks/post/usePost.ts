import axios from 'axios';
import useAuth from 'hooks/auth/useAuth';
import {useState} from 'react';
import {useMutation} from 'react-query';
import {PostData} from 'types/post';
import getCommonError from 'utils/api/getCommonError';
import {API_URL} from 'utils/api/_constants';

const usePost = (callback?: () => void) => {
  const {userData} = useAuth();
  const [error, setError] = useState('');
  const postMutation = useMutation(
    (postData: PostData) => {
      return axios.post(`${API_URL}/posts`, postData, {
        headers: {
          Authorization: userData.token,
        },
      });
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
    post: postMutation.mutate,
    isPosting: postMutation.isLoading,
    postError: error,
  };
};

export default usePost;
