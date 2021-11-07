import axios from 'axios';
import useAuth from 'hooks/auth/useAuth';
import {useState} from 'react';
import {useMutation} from 'react-query';
import {NotificationInfo} from 'types/notification';
import getCommonError from 'utils/api/getCommonError';
import {API_URL} from 'utils/api/_constants';

const useDeleteNotification = (callback?: () => void) => {
  const {userData} = useAuth();
  const [error, setError] = useState('');
  const deleteMutation = useMutation(
    (notificationInfo: NotificationInfo) => {
      return axios.delete(`${API_URL}/notifications/${notificationInfo._id}`, {
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
    deleteNotification: deleteMutation.mutate,
    isDeleting: deleteMutation.isLoading,
    error: error,
  };
};

export default useDeleteNotification;
