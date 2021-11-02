import {Box, BoxProps} from '@chakra-ui/layout';

const Container = (props: BoxProps) => {
  return (
    <Box {...props} maxWidth='container.md' marginX='auto'>
      {props.children}
    </Box>
  );
};

export default Container;
