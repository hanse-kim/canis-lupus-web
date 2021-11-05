import axios from 'axios';
import useAuth from 'hooks/auth/useAuth';
import {useMemo, useState} from 'react';
import {useMutation} from 'react-query';
import {UserInfo} from 'types/auth';
import {SearchQuery} from 'types/hook';
import {API_URL} from 'utils/api/_constants';

const itemPerPage = 10;

const useMyGroupList = () => {
  const [page, setPage] = useState(1);
  const {userData} = useAuth();

  const getRequestUrl = (searchQuery: SearchQuery) => {
    return `${API_URL}/users/${userData._id}`;
  };

  const groupListMutation = useMutation(
    (searchQuery: SearchQuery) => {
      return axios
        .get<UserInfo>(getRequestUrl(searchQuery))
        .then((res) => res.data.meetings.joining);
    },
    {
      onSuccess: (axiosResponse) => {
        setPage(1);
      },
    }
  );

  const groupList = useMemo(() => {
    if (groupListMutation.data) {
      return groupListMutation.data;
    }

    return [];
  }, [groupListMutation.data]);

  const groupCount = useMemo(() => {
    if (groupListMutation.data) {
      return groupListMutation.data.length;
    }

    return 0;
  }, [groupListMutation.data]);

  const maxPage = useMemo(() => {
    return Math.ceil(groupCount / itemPerPage);
  }, [groupCount]);

  const groupListPerPage = useMemo(() => {
    if (groupListMutation.data) {
      return groupListMutation.data.slice(
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

export default useMyGroupList;
