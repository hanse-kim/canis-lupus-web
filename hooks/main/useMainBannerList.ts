import axios from 'axios';
import {useMemo} from 'react';
import {useQuery} from 'react-query';
import {BannerInfo, BannerRecord} from 'types';

const useMainBannerList = () => {
  const {data, isLoading, isSuccess} = useQuery(['banner-list'], () => {
    return axios.get<{
      records: BannerRecord[];
    }>('/api/main/mainBannerList');
  });

  const bannerList = useMemo(() => {
    if (isSuccess && data!.data) {
      const records = data!.data.records;
      const list: BannerInfo[] = [];
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
    bannerList: bannerList,
    isLoading: isLoading,
  };
};

export default useMainBannerList;
