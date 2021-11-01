import axios from 'axios';
import {useState} from 'react';
import {useQuery} from 'react-query';
import {CategoryInfo} from 'types/domain';

const useCategoryList = () => {
  const [categoryList, setCategoryList] = useState<CategoryInfo[]>([]);
  const {isLoading} = useQuery(
    ['category-list'],
    () => {
      return axios.get<CategoryInfo[]>('/api/register/categoryList');
    },
    {
      onSuccess: (axiosResponse) => {
        setCategoryList(axiosResponse.data);
        if (axiosResponse.data) {
          setCategoryList(axiosResponse.data);
        } else {
          return [];
        }
      },
    }
  );

  return {
    categoryList,
    isLoading,
  };
};

export default useCategoryList;
