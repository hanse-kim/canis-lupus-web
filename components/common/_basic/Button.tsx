import {Button as ChakraButton, ButtonProps} from '@chakra-ui/button';
import {Box} from '@chakra-ui/layout';
import {colors} from 'style';
import multiplyColors from 'utils/style/multiplyColors';

const multiplyColor = colors.mainGray[0];
const idleColor = colors.mainBlue[1];
const hoverColor = multiplyColors(idleColor, multiplyColor);
const activeColor = multiplyColors(hoverColor, multiplyColor);

const Button = (props: ButtonProps) => {
  if (props.disabled) {
    return (
      <ChakraButton
        {...props}
        {...{color: colors.white, backgroundColor: colors.mainGray[0]}}
        _hover={{color: colors.white, backgroundColor: colors.mainGray[0]}}
        _active={{color: colors.white, backgroundColor: colors.mainGray[0]}}
      >
        <Box>{props.children}</Box>
      </ChakraButton>
    );
  }

  return (
    <ChakraButton
      {...props}
      {...{color: colors.white, backgroundColor: idleColor}}
      _hover={{color: colors.white, backgroundColor: hoverColor}}
      _active={{color: colors.white, backgroundColor: activeColor}}
    >
      <Box>{props.children}</Box>
    </ChakraButton>
  );
};

export default Button;
