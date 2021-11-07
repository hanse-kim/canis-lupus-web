import {Box, Center} from '@chakra-ui/layout';
import {Button} from 'components/common/_basic';
import useGroupJoinForm from 'hooks/group/useGroupJoinForm';
import React from 'react';
import {colors} from 'style';
import {SpecificGroupInfo} from 'types/group';

const NotMemberTab = (props: {groupInfo: SpecificGroupInfo}) => {
  const {onJoinClick, isLoading} = useGroupJoinForm(props.groupInfo);

  return (
    <Box paddingX='16px' paddingY='24px'>
      <Center color={colors.mainGray[1]}>모임원만 볼 수 있어요.</Center>
      <Button
        onClick={onJoinClick}
        isLoading={isLoading}
        width='full'
        height='48px'
        marginTop='24px'
      >
        가입하기
      </Button>
    </Box>
  );
};

export default NotMemberTab;
