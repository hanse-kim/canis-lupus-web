import axios from 'axios';
import useAuth from 'hooks/auth/useAuth';
import {useState} from 'react';
import {useMutation} from 'react-query';
import getCommonError from 'utils/api/getCommonError';
import {API_URL} from 'utils/api/_constants';

const useCompleteQuest = (callback?: () => void) => {
  const {userData} = useAuth();
  const [error, setError] = useState('');
  const completeQuestMutation = useMutation(
    (data: {questId: string; userId: string}) => {
      return axios.patch(
        `${API_URL}/quests/${data.questId}/completion`,
        {user_id: data.userId},
        {
          headers: {
            Authorization: userData.token,
          },
        }
      );
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
    completeQuest: completeQuestMutation.mutate,
    isLoading: completeQuestMutation.isLoading,
    postError: error,
  };
};

export default useCompleteQuest;
