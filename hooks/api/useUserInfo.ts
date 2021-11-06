import axios from 'axios';
import useAuth from 'hooks/auth/useAuth';
import {useEffect, useMemo} from 'react';
import {useMutation} from 'react-query';
import {UserInfo} from 'types/auth';
import {API_URL} from 'utils/api/_constants';

const useUserInfo = (userIdInput?: string) => {
  const {userData} = useAuth();
  const userId = useMemo(() => {
    if (userIdInput) {
      return userIdInput;
    } else {
      return userData._id;
    }
  }, [userData._id, userIdInput]);

  const userInfoMutation = useMutation(() => {
    return axios.get<UserInfo>(`${API_URL}/users/${userId}`);
  });

  useEffect(() => {
    if (userId && userInfoMutation.isIdle) {
      userInfoMutation.mutate();
    }
  }, [userId, userInfoMutation]);

  return {
    userInfo: userInfoMutation.data?.data,
    isLoading: userInfoMutation.isLoading,
  };
};

export default useUserInfo;
