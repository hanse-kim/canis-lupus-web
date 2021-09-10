import {Button, FormControl, HStack} from '@chakra-ui/react';
import React from 'react';
import {FormProps} from 'types/props';
import {
  RegisterFormErrorMessage,
  RegisterFormInput,
  RegisterFormLabel,
} from './sub/RegisterFormItems';

const MobileForm = (props: FormProps & {isSend: boolean}) => {
  const {error, onClick, onChange, isSend} = props;
  return (
    <FormControl isInvalid={error?.mobile.isInvalid}>
      <RegisterFormLabel isInvalid={error?.mobile.isInvalid}>
        휴대폰 번호
      </RegisterFormLabel>
      <HStack spacing='4'>
        <RegisterFormInput
          type='number'
          placeholder='휴대폰 번호 (- 없이 입력)'
          onChange={onChange}
        />
        <Button onClick={onClick} disabled={error?.mobile.isInvalid}>
          {!isSend ? '인증번호 전송' : '재전송'}
        </Button>
      </HStack>
      <RegisterFormErrorMessage>
        {error?.mobile.message}
      </RegisterFormErrorMessage>
    </FormControl>
  );
};

export default MobileForm;
