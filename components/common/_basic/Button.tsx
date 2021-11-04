import {Button as ChakraButton, ButtonProps} from '@chakra-ui/button';
import {Box} from '@chakra-ui/layout';
import {colors} from 'style';
import multiplyColors from 'utils/style/multiplyColors';

const colorToMultiply = colors.multiply;
const idleColorBlue = colors.mainBlue[1];
const hoverColorBlue = multiplyColors(idleColorBlue, colorToMultiply);
const activeColorBlue = multiplyColors(hoverColorBlue, colorToMultiply);
const idleColorGray = colors.panelGray;
const hoverColorGray = multiplyColors(idleColorGray, colorToMultiply);
const activeColorGray = multiplyColors(idleColorGray, colorToMultiply);

const styles = {
  disabled: {
    color: colors.white,
    backgroundColor: colors.mainGray[0],
    _hover: {color: colors.white, backgroundColor: colors.mainGray[0]},
    _active: {color: colors.white, backgroundColor: colors.mainGray[0]},
  },
  blue: {
    color: colors.white,
    backgroundColor: idleColorBlue,
    _hover: {
      color: colors.white,
      backgroundColor: hoverColorBlue,
    },
    _active: {
      color: colors.white,
      backgroundColor: activeColorBlue,
    },
  },
  gray: {
    color: colors.mainGray[1],
    backgroundColor: idleColorGray,
    _hover: {
      color: colors.mainGray[1],
      backgroundColor: hoverColorGray,
    },
    _active: {
      color: colors.mainGray[1],
      backgroundColor: activeColorGray,
    },
  },
};

const Button = (props: ButtonProps & {theme?: 'blue' | 'gray'}) => {
  if (props.disabled) {
    return (
      <ChakraButton {...props} {...styles.disabled}>
        <Box>{props.children}</Box>
      </ChakraButton>
    );
  }

  let style = styles.blue;
  if (props.theme === 'gray') {
    style = styles.gray;
  }

  return (
    <ChakraButton {...props} {...style}>
      <Box>{props.children}</Box>
    </ChakraButton>
  );
};

export default Button;
