import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Stack,
} from '@chakra-ui/react';
import React, {useRef, useState} from 'react';
import SubmitButton from './parts/SubmitButton';

const MobileVerificationForm = (props: any) => {
  const {update, onSubmit} = props;
  const [isSend, setSend] = useState(false);
  const phoneNumberInput = useRef<HTMLInputElement>(null);

  const sendVerificationCode = () => {
    setSend(true);
  };

  return (
    <Stack spacing='6'>
      <FormControl>
        <FormLabel
          as='legend'
          fontWeight='bold'
          color={props.isInvalid ? 'red.500' : undefined}
        >
          휴대폰 번호
        </FormLabel>
        <Stack direction='row' spacing='4'>
          <Input
            type='number'
            placeholder='휴대폰 번호 (- 없이 입력)'
            onBlur={props.onFocusOut}
            borderRadius='0'
            ref={phoneNumberInput}
          />
          <Button onClick={sendVerificationCode}>
            {isSend ? '재전송' : '인증번호 전송'}
          </Button>
        </Stack>
      </FormControl>
      {isSend && (
        <React.Fragment>
          <FormControl>
            <FormLabel
              as='legend'
              fontWeight='bold'
              color={props.isInvalid ? 'red.500' : undefined}
            >
              인증번호
            </FormLabel>
            <Input
              type='number'
              onBlur={props.onFocusOut}
              borderRadius='0'
              ref={props.ref}
            />
            <FormHelperText
              fontSize='xs'
              color='red.500'
              display={props.isInvalid ? 'none' : undefined}
            >
              남은 시간: {'2분 50초'}
            </FormHelperText>
          </FormControl>
          <SubmitButton
            onClick={() => {
              update({phone: phoneNumberInput.current?.value});
              onSubmit();
            }}
            disabled={false}
          >
            확인
          </SubmitButton>
        </React.Fragment>
      )}
    </Stack>
  );
};

export default MobileVerificationForm;
