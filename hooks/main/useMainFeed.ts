import axios from 'axios';
import {useMemo} from 'react';
import {useQuery} from 'react-query';
import {FeedInfo, FeedRecord} from 'types/domain';

const useFeedList = (query: {
  filter?: {searchBy: string; keyword: string};
  limit?: number;
}) => {
  const {data, isLoading, isSuccess} = useQuery(['feed-list'], () => {
    return axios.get<{
      records: FeedRecord[];
    }>('/api/main/feedList', {
      params: {
        searchBy: query.filter?.searchBy,
        keyword: query.filter?.keyword,
        maxRecords: query.limit,
      },
    });
  });

  const feedList = useMemo(() => {
    if (isSuccess && data!.data) {
      const records = data!.data.records;
      const list: FeedInfo[] = [];
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
    feedList,
    isLoading,
  };
};

export default useFeedList;
