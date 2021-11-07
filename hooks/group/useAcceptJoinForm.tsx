import {useToast} from '@chakra-ui/toast';
import {Toast} from 'components/common/_basic';
import usePageMove from 'hooks/usePageMove';
import React from 'react';
import useAcceptJoin from './useAcceptJoin';

const SuccesssToast = () => {
  return <Toast title='수락 완료' description='모임 가입을 수락했습니다.' />;
};

const useAcceptJoinForm = (groupId: string, userId: string) => {
  const toast = useToast();
  const {pageMove} = usePageMove();

  const {acceptJoin, isLoading} = useAcceptJoin(() => {
    pageMove(`/group/${groupId}/main`);
    return toast({render: SuccesssToast});
  });

  const onJoinClick = () => {
    acceptJoin({groupId, userId});
  };

  return {onJoinClick, isLoading};
};

export default useAcceptJoinForm;
