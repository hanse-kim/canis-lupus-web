import {BoxProps, Center, Spinner} from '@chakra-ui/react';

const LoadingSpinner = (props: BoxProps) => {
  return (
    <Center {...props} marginY='5'>
      <Spinner />
    </Center>
  );
};

export default LoadingSpinner;
