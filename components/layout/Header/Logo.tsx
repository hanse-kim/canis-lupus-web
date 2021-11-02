import {Box, Image, Link} from '@chakra-ui/react';

const LOGO_WIDTH = 122;

const Logo = () => {
  return (
    <Box className="logoContainer" marginRight="5" height="auto" marginY="auto">
      <Link className="logoButton" href="/main">
        <Image src="/logo.svg" alt="logo" width={`${LOGO_WIDTH}px`} />
      </Link>
    </Box>
  );
};

export default Logo;
