import {Alert} from '@chakra-ui/alert';
import {CheckCircleIcon} from '@chakra-ui/icons';
import {Box, HStack, Stack} from '@chakra-ui/layout';
import {colors} from 'style';

const Toast = (props: {title: string; description: string}) => {
  return (
    <Alert backgroundColor={colors.mainBlue[1]} borderRadius='4px'>
      <Stack spacing='8px' color={colors.white}>
        <Box fontSize='18px' fontWeight='bold'>
          <HStack spacing='8px' alignItems='center'>
            <CheckCircleIcon />
            <Box>{props.title}</Box>
          </HStack>
        </Box>
        <Box fontSize='14px'>{props.description}</Box>
      </Stack>
    </Alert>
  );
};

export default Toast;
