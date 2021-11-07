import axios from 'axios';
import useAuth from 'hooks/auth/useAuth';
import {useEffect} from 'react';
import {useMutation} from 'react-query';
import {NotificationInfo} from 'types/notification';
import {API_URL} from 'utils/api/_constants';

const useNotificationList = () => {
  const {userData} = useAuth();

  const notificationMutation = useMutation(() => {
    return axios.get<NotificationInfo[]>(
      `${API_URL}/notifications/user/${userData._id}`,
      {
        headers: {
          Authorization: userData.token,
        },
      }
    );
  });

  useEffect(() => {
    if (userData._id && notificationMutation.isIdle) {
      notificationMutation.mutate();
    }
  }, [notificationMutation, userData._id]);

  return {
    notificationList: notificationMutation.data?.data,
    isLoading: notificationMutation.isLoading,
  };
};

export default useNotificationList;
