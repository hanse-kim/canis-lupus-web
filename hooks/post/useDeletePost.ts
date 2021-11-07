import axios from 'axios';
import useAuth from 'hooks/auth/useAuth';
import {useState} from 'react';
import {useMutation} from 'react-query';
import {PostInfo} from 'types/post';
import getCommonError from 'utils/api/getCommonError';
import {API_URL} from 'utils/api/_constants';

const useDeletePost = (callback?: () => void) => {
  const {userData} = useAuth();
  const [error, setError] = useState('');
  const postMutation = useMutation(
    (postInfo: PostInfo) => {
      return axios.delete(`${API_URL}/posts/${postInfo.id}`, {
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
    deletePost: postMutation.mutate,
    isDeleting: postMutation.isLoading,
    postError: error,
  };
};

export default useDeletePost;
