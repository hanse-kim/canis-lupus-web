import axios from 'axios';
import {useState} from 'react';
import {useQuery} from 'react-query';
import {PostInfo} from 'types/post';
import {API_URL} from 'utils/api/_constants';

const useGroupPosts = (groupId: string) => {
  const [groupPosts, setGroupPosts] = useState<PostInfo[]>([]);
  const {isLoading} = useQuery(
    ['category-list'],
    () => {
      return axios.get<PostInfo[]>(`${API_URL}/posts/meetings/${groupId}`);
    },
    {
      onSuccess: (axiosResponse) => {
        setGroupPosts(axiosResponse.data);
      },
    }
  );

  return {
    groupPosts,
    isLoading,
  };
};

export default useGroupPosts;
