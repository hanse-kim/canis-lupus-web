import axios from 'axios';
import {useEffect} from 'react';
import {useMutation} from 'react-query';
import {SpecificGroupInfo} from 'types/group';
import {API_URL} from 'utils/api/_constants';

const useGroupInfo = (gid: string | string[] | undefined) => {
  const groupInfoMutation = useMutation((gid: string) => {
    return axios.get<SpecificGroupInfo>(`${API_URL}/meetings/${gid}`);
  });

  useEffect(() => {
    if (gid && !Array.isArray(gid) && groupInfoMutation.isIdle) {
      groupInfoMutation.mutate(gid);
    }
  }, [gid, groupInfoMutation]);

  return {
    groupInfo: groupInfoMutation.data?.data,
    isLoading: groupInfoMutation.isLoading,
  };
};

export default useGroupInfo;
