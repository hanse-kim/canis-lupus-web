import axios from 'axios';
import {useMemo, useState} from 'react';
import {useMutation} from 'react-query';
import {GroupInfo} from 'types/group';
import {SearchQuery} from 'types/hook';
import {API_URL} from 'utils/api/_constants';
import objectToParams from 'utils/objectToParams';

const itemPerPage = 10;

const useGroupList = () => {
  const [page, setPage] = useState(1);

  const getRequestUrl = (searchQuery: SearchQuery) => {
    if (searchQuery.searchBy === 'keyword') {
      return `${API_URL}/meetings/keyword/${searchQuery.value}?${objectToParams(
        searchQuery.options
      )}`;
    } else {
      return `${API_URL}/meetings?${objectToParams(searchQuery.options)}`;
    }
  };

  const groupListMutation = useMutation(
    (searchQuery: SearchQuery) => {
      return axios.get<GroupInfo[]>(getRequestUrl(searchQuery));
    },
    {
      onSuccess: (axiosResponse) => {
        setPage(1);
      },
    }
  );

  const groupList = useMemo(() => {
    if (groupListMutation.data) {
      return groupListMutation.data.data;
    }

    return [];
  }, [groupListMutation.data]);

  const groupCount = useMemo(() => {
    if (groupListMutation.data) {
      return groupListMutation.data.data.length;
    }

    return 0;
  }, [groupListMutation.data]);

  const maxPage = useMemo(() => {
    return Math.ceil(groupCount / itemPerPage);
  }, [groupCount]);

  const groupListPerPage = useMemo(() => {
    if (groupListMutation.data) {
      return groupListMutation.data.data.slice(
        (page - 1) * itemPerPage,
        page * itemPerPage
      );
    }

    return [];
  }, [groupListMutation.data, page]);

  return {
    fetchGroupList: groupListMutation.mutate,
    groupCount,
    groupList,
    groupListPerPage,
    setPage,
    maxPage,
    page,
    isLoading: groupListMutation.isLoading,
  };
};

export default useGroupList;
