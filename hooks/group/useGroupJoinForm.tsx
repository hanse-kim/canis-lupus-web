import {useToast} from '@chakra-ui/toast';
import {Toast} from 'components/common/_basic';
import useAuth from 'hooks/auth/useAuth';
import usePageMove from 'hooks/usePageMove';
import React from 'react';
import {SpecificGroupInfo} from 'types/group';
import useGroupJoin from './useGroupJoin';

const SuccesssToast = () => {
  return <Toast title='신청 완료' description='모임 가입 신청이 되었습니다.' />;
};

const useGroupJoinForm = (groupInfo: SpecificGroupInfo) => {
  const toast = useToast();
  const {userData} = useAuth();
  const {pageMove} = usePageMove();

  const {joinGroup, isLoading} = useGroupJoin(() => {
    return toast({render: SuccesssToast});
  });

  const onJoinClick = () => {
    if (!userData || !userData.token) {
      pageMove('/login');
    } else {
      joinGroup(groupInfo._id);
    }
  };

  return {onJoinClick, isLoading};
};

export default useGroupJoinForm;
