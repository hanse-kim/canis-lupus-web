import axios from 'axios';
import {useEffect} from 'react';
import {useMutation} from 'react-query';
import {QuestInfo} from 'types/quest';
import {API_URL} from 'utils/api/_constants';

const useGroupQuestList = (gid: string) => {
  const groupQuestMutation = useMutation(
    (gid: string) => {
      return axios.get<QuestInfo[]>(`${API_URL}/quests/meetings/${gid}`);
    }
  );

  useEffect(() => {
    if (groupQuestMutation.isIdle) {
      groupQuestMutation.mutate(gid);
    }
  }, [gid, groupQuestMutation]);

  return {
    questList: groupQuestMutation.data ? groupQuestMutation.data.data : [],
    isLoading: groupQuestMutation.isLoading,
  };
};

export default useGroupQuestList;
