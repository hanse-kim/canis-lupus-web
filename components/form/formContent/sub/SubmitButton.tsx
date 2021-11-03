import {ButtonProps} from '@chakra-ui/react';
import {Button} from 'components/common/_basic';

const SubmitButton = (props: ButtonProps) => {
  return (
    <Button
      className='submitButton'
      width='full'
      height='52px'
      marginTop='32px'
      {...props}
    >
      {props.children}
    </Button>
  );
};

export default SubmitButton;
