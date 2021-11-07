import axios from 'axios';
import useAuth from 'hooks/auth/useAuth';
import {useState} from 'react';
import {useMutation} from 'react-query';
import {QuestInfo} from 'types/quest';
import getCommonError from 'utils/api/getCommonError';
import {API_URL} from 'utils/api/_constants';

const useDeleteQuest = (callback?: () => void) => {
  const {userData} = useAuth();
  const [error, setError] = useState('');
  const deleteQuestMutation = useMutation(
    (questInfo: QuestInfo) => {
      return axios.delete(`${API_URL}/quests/${questInfo._id}`, {
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
    deleteQuest: deleteQuestMutation.mutate,
    isDeleting: deleteQuestMutation.isLoading,
    error: error,
  };
};

export default useDeleteQuest;
