import axios from 'axios';
import useAuth from 'hooks/auth/useAuth';
import {useState} from 'react';
import {useMutation} from 'react-query';
import {CreateGroupData} from 'types/group';
import getCommonError from 'utils/api/getCommonError';
import objectToFormData from 'utils/api/objectToFormData';
import {API_URL} from 'utils/api/_constants';

const useCreateGroup = (callback?: () => void) => {
  const {userData} = useAuth();
  const [error, setError] = useState('');
  const createGroupMutation = useMutation(
    (groupData: CreateGroupData) => {
      const formData = objectToFormData(groupData);
      return axios.post(`${API_URL}/meetings`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': userData.token,
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
    createGroup: createGroupMutation.mutate,
    isCreating: createGroupMutation.isLoading,
    createGroupError: error,
  };
};

export default useCreateGroup;
