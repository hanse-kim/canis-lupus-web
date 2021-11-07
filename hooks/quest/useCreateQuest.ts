import axios from 'axios';
import useAuth from 'hooks/auth/useAuth';
import {useState} from 'react';
import {useMutation} from 'react-query';
import {QuestData} from 'types/quest';
import getCommonError from 'utils/api/getCommonError';
import {API_URL} from 'utils/api/_constants';

const useCreateQuest = (callback?: () => void) => {
  const {userData} = useAuth();
  const [error, setError] = useState('');
  const createQuestMutation = useMutation(
    (questData: QuestData) => {
      return axios.post(`${API_URL}/quests`, questData, {
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
    createQuest: createQuestMutation.mutate,
    isCreating: createQuestMutation.isLoading,
    error: error,
  };
};

export default useCreateQuest;
