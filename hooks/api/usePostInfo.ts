import axios from 'axios';
import {useEffect} from 'react';
import {useMutation} from 'react-query';
import {PostInfo} from 'types/post';
import {API_URL} from 'utils/api/_constants';

const usePostInfo = (pid: string | string[] | undefined) => {
  const postInfoMutation = useMutation((pid: string) => {
    return axios.get<PostInfo>(`${API_URL}/posts/${pid}`);
  });

  useEffect(() => {
    if (pid && !Array.isArray(pid) && postInfoMutation.isIdle) {
      postInfoMutation.mutate(pid);
    }
  }, [pid, postInfoMutation]);

  return {
    postInfo: postInfoMutation.data?.data,
    isLoading: postInfoMutation.isLoading,
  };
};

export default usePostInfo;
