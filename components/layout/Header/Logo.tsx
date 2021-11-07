import {Box, Image, Link} from '@chakra-ui/react';

const Logo = (props: {width?: string; height?: string}) => {
  return (
    <Box
      className='logoContainer'
      height='auto'
      width='fit-content'
      marginY='auto'
    >
      <Link className='logoButton' href='/'>
        <Image src='/logo.svg' alt='logo' {...props} />
      </Link>
    </Box>
  );
};

export default Logo;
