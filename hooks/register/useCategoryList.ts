import axios from 'axios';
import {useMemo} from 'react';
import {useQuery} from 'react-query';
import {CategoryInfo} from 'types';
import {CategoryRecord} from 'types';

const useCategoryList = () => {
  const {data, isLoading, isSuccess} = useQuery(['category-list'], () => {
    return axios.get<{
      records: CategoryRecord[];
    }>('/api/register/categoryList');
  });

  const categoryList = useMemo(() => {
    if (isSuccess && data!.data) {
      const records = data!.data.records;
      const list: CategoryInfo[] = [];
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
    categoryList,
    isLoading,
  };
};

export default useCategoryList;
