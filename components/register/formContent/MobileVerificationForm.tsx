import {Button, FormControl, Stack} from '@chakra-ui/react';
import useFormData from 'hooks/register/useFormData';
import React, {useState} from 'react';
import {FormContentProps} from 'types';
import {
  RegisterFormHelperText,
  RegisterFormInput,
  RegisterFormLabel,
} from './sub/RegisterFormItems';
import SubmitButton from './sub/SubmitButton';

const MobileVerificationForm = (props: FormContentProps) => {
  const [isSend, setSend] = useState(false);
  const {onSubmit} = props;
  const {updateFormData} = useFormData();

  const sendVerificationCode = () => {
    setSend(true);
  };

  return (
    <Stack spacing='6'>
      <FormControl>
        <RegisterFormLabel>휴대폰 번호</RegisterFormLabel>
        <Stack direction='row' spacing='4'>
          <RegisterFormInput
            type='number'
            placeholder='휴대폰 번호 (- 없이 입력)'
          />
          <Button onClick={sendVerificationCode}>
            {isSend ? '재전송' : '인증번호 전송'}
          </Button>
        </Stack>
      </FormControl>
      {isSend && (
        <React.Fragment>
          <FormControl>
            <RegisterFormLabel>인증번호</RegisterFormLabel>
            <RegisterFormInput type='number' />
            <RegisterFormHelperText color='red.500'>
              남은 시간: {'2분 50초'}
            </RegisterFormHelperText>
          </FormControl>
          <SubmitButton
            onClick={() => {
              updateFormData({});
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
