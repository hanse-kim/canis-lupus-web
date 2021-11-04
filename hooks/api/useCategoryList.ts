import axios from 'axios';
import {useState} from 'react';
import {useQuery} from 'react-query';
import {CategoryInfo} from 'types/domain';
import {API_URL} from 'utils/api/_constants';

const useCategoryList = () => {
  const [categoryList, setCategoryList] = useState<CategoryInfo[]>([]);
  const {isLoading} = useQuery(
    ['category-list'],
    () => {
      return axios.get<CategoryInfo[]>(`${API_URL}/categories`);
    },
    {
      onSuccess: (axiosResponse) => {
        setCategoryList(axiosResponse.data);
      },
    }
  );

  return {
    categoryList,
    isLoading,
  };
};

export default useCategoryList;
