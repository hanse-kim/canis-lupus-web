import axios from 'axios';
import useAuth from 'hooks/auth/useAuth';
import {useEffect} from 'react';
import {useMutation} from 'react-query';
import {UserInfo} from 'types/auth';
import {API_URL} from 'utils/api/_constants';

const useUserInfo = () => {
  const {userData} = useAuth();

  const userInfoMutation = useMutation(() => {
    return axios.get<UserInfo>(`${API_URL}/users/${userData._id}`);
  });

  useEffect(() => {
    if (userData._id && userInfoMutation.isIdle) {
      userInfoMutation.mutate();
    }
  }, [userData._id, userInfoMutation]);

  return {
    userInfo: userInfoMutation.data?.data,
    isLoading: userInfoMutation.isLoading,
  };
};

export default useUserInfo;
