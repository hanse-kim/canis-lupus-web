import {Box, Center} from '@chakra-ui/layout';
import {Button} from 'components/common/_basic';
import React from 'react';
import {colors} from 'style';

const NotMemberTab = () => {
  return (
    <Box paddingX='16px' paddingY='24px'>
      <Center color={colors.mainGray[1]}>모임원만 볼 수 있어요.</Center>
      <Button width='full' height='48px' marginTop='24px'>
        가입하기
      </Button>
    </Box>
  );
};

export default NotMemberTab;
