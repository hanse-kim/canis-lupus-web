import {Box, Center, Heading} from '@chakra-ui/layout';
import LoadingSpinner from 'components/common/LoadingSpinner';
import {Button} from 'components/common/_basic';
import useUserInfo from 'hooks/api/useUserInfo';
import React from 'react';
import {colors} from 'style';
import {SpecificGroupInfo} from 'types/group';

const HomeTab = (props: {groupInfo: SpecificGroupInfo}) => {
  const {groupInfo} = props;
  const {userInfo, isLoading} = useUserInfo();

  if (isLoading) {
    return (
      <Center paddingY='24px'>
        <LoadingSpinner />
      </Center>
    );
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
          <Button width='full' height='48px' marginTop='24px'>
            가입하기
          </Button>
        )}
    </Box>
  );
};

export default HomeTab;
