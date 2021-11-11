import {Box, Heading} from '@chakra-ui/layout';
import {Button} from 'components/common/_basic';
import useUserInfo from 'hooks/api/useUserInfo';
import useGroupJoinForm from 'hooks/group/useGroupJoinForm';
import React from 'react';
import {colors} from 'style';
import {SpecificGroupInfo} from 'types/group';
import LoadingTab from './LoadingTab';

const HomeTab = (props: {groupInfo: SpecificGroupInfo}) => {
  const {groupInfo} = props;
  const {userInfo, isLoading} = useUserInfo();
  const {onJoinClick, isLoading: isJoinLoading} = useGroupJoinForm(
    props.groupInfo
  );

  if (isLoading) {
    return <LoadingTab />;
  }

  return (
    <Box paddingX='16px' paddingY='24px'>
      <Box color={colors.minorTextGray} marginBottom='8px'>
        {groupInfo.category.name}
      </Box>
      <Heading fontSize='24px' marginBottom='12px'>
        {groupInfo.name}
      </Heading>
      <Box fontSize='16px' lineHeight='24px'>
        {groupInfo.introduction}
      </Box>
      {userInfo &&
        userInfo.meetings.joining.every(
          (group) => group._id !== groupInfo._id
        ) && (
          <Button
            onClick={onJoinClick}
            isLoading={isJoinLoading}
            width='full'
            height='48px'
            marginTop='24px'
          >
            가입하기
          </Button>
        )}
    </Box>
  );
};

export default HomeTab;
