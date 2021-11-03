import {Box, Heading, Stack} from '@chakra-ui/layout';
import React from 'react';

const Terms = (props: {title: string; content: string}) => {
  return (
    <Stack paddingTop='60px' paddingBottom='80px' spacing='20px'>
      <Heading fontSize='26px'>{props.title}</Heading>
      <Box color='#9b9b9b' fontSize='12px'>
        {props.content.split('\n').map((line, index) => (
          <Box key={index}>{line ? line : '​'}</Box>
        ))}
      </Box>
    </Stack>
  );
};

export default Terms;
