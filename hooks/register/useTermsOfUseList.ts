import axios from 'axios';
import {useMemo} from 'react';
import {useQuery} from 'react-query';
import {TosInfo, TosRecord} from 'types';

const useTermsOfUseList = () => {
  const {data, isLoading, isSuccess} = useQuery(['tos-list'], () => {
    return axios.get<{
      records: TosRecord[];
    }>('/api/register/termsOfUseList');
  });

  const termsOfUseList = useMemo(() => {
    if (isSuccess && data!.data) {
      const records = data!.data.records;
      const list: TosInfo[] = [];
      for (const record of records) {
        const banner = record.fields;
        list.push(banner);
      }
      return list;
    } else {
      return [];
    }
  }, [isSuccess, data]);

  return {
    termsOfUseList: termsOfUseList,
    isLoading: isLoading,
  };
};

export default useTermsOfUseList;
