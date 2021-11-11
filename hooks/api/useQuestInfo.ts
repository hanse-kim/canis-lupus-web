import axios from 'axios';
import {useEffect} from 'react';
import {useMutation} from 'react-query';
import {QuestInfo} from 'types/quest';
import {API_URL} from 'utils/api/_constants';

const useQuestInfo = (qid: string | string[] | undefined) => {
  const questInfoMutation = useMutation((qid: string) => {
    return axios.get<QuestInfo>(`${API_URL}/quests/${qid}`);
  });

  useEffect(() => {
    if (qid && !Array.isArray(qid) && questInfoMutation.isIdle) {
      questInfoMutation.mutate(qid);
    }
  }, [qid, questInfoMutation]);

  return {
    questInfo: questInfoMutation.data?.data,
    isLoading: questInfoMutation.isLoading,
  };
};

export default useQuestInfo;
