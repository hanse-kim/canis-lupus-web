import {Button, ButtonProps} from '@chakra-ui/react';

const SubmitButton = (props: ButtonProps) => {
  return (
    <Button width='full' height='12' marginTop='8' {...props}>
      {props.children}
    </Button>
  );
};

export default SubmitButton;
