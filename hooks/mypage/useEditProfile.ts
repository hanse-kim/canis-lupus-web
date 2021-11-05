import axios from 'axios';
import useAuth from 'hooks/auth/useAuth';
import {useState} from 'react';
import {useMutation} from 'react-query';
import {EditProfileData} from 'types/auth';
import getCommonError from 'utils/api/getCommonError';
import {API_URL} from 'utils/api/_constants';

const useEditProfile = (callback?: () => void) => {
  const {userData} = useAuth();
  const [error, setError] = useState('');
  const editProfileMutation = useMutation(
    (editProfileData: EditProfileData) => {
      return axios.patch(`${API_URL}/users/${userData._id}`, editProfileData, {
        headers: {
          Authorization: userData.token,
        },
      });
    },
    {
      onSuccess: () => {
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
    editProfile: editProfileMutation.mutate,
    isEditing: editProfileMutation.isLoading,
    editProfileError: error,
  };
};

export default useEditProfile;
