import axios from 'axios';
import {useMemo} from 'react';
import {useQuery} from 'react-query';
import {GroupInfo, GroupRecord} from 'types/domain';

const useGroupList = (query: {
  filter?: {searchBy: string; keyword: string};
  limit?: number;
}) => {
  const {data, isLoading, isSuccess} = useQuery(['group-list'], () => {
    return axios.get<{
      records: GroupRecord[];
    }>('/api/main/groupList', {
      params: {
        searchBy: query.filter?.searchBy,
        keyword: query.filter?.keyword,
        maxRecords: query.limit,
      },
    });
  });

  const groupList = useMemo(() => {
    if (isSuccess && data!.data) {
      const records = data!.data.records;
      const list: GroupInfo[] = [];
      for (const record of records) {
        const group = record.fields;
        list.push(group);
      }
      return list;
    } else {
      return [];
    }
  }, [isSuccess, data]);

  return {
    groupList,
    isLoading,
  };
};

export default useGroupList;
