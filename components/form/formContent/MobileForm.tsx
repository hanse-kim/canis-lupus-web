import {Button, FormControl, HStack} from '@chakra-ui/react';
import React from 'react';
import {ButtonFormProps, InputFormProps} from 'types/props';
import {FormErrorMessage, FormInput, FormLabel} from './sub/RegisterFormItems';

const MobileForm = (props: {
  inputProps: InputFormProps;
  buttonProps: ButtonFormProps;
  isSend: boolean;
}) => {
  const {error, onChange} = props.inputProps;
  const {onClick} = props.buttonProps;
  const {isSend} = props;

  return (
    <FormControl isInvalid={error?.isInvalid}>
      <FormLabel isInvalid={error?.isInvalid}>휴대폰 번호</FormLabel>
      <HStack spacing='4'>
        <FormInput
          type='number'
          placeholder='휴대폰 번호 (- 없이 입력)'
          onChange={onChange as React.ChangeEventHandler<HTMLInputElement>}
        />
        <Button
          onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
          disabled={error?.isInvalid}
        >
          {!isSend ? '인증번호 전송' : '재전송'}
        </Button>
      </HStack>
      <FormErrorMessage>{error?.message}</FormErrorMessage>
    </FormControl>
  );
};

export default MobileForm;
