import {extendTheme} from '@chakra-ui/react';
import {colors} from 'style';

const defaultChakraTheme = extendTheme({
  styles: {
    global: {
      body: {
        minHeight: '100vh',
        color: colors.black,
        fontSize: '14px',
        fontFamily: 'AppleSDGothicNeo, Noto Sans KR, sans-serif',
      },
    },
  },
});

export default defaultChakraTheme;
