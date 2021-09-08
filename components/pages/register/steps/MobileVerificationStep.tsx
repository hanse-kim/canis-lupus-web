import {Button, FormControl, Stack} from '@chakra-ui/react';
import useFormData from 'hooks/form/useFormData';
import React, {useEffect, useState} from 'react';
import {FormContentProps} from 'types';
import FormContentWrapper from 'components/form/FormContentWrapper';
import {
  RegisterFormHelperText,
  RegisterFormInput,
  RegisterFormLabel,
} from 'components/form/formContent/sub/RegisterFormItems';
import SubmitButton from 'components/form/formContent/sub/SubmitButton';

const keys: string[] = [];

const MobileVerificationStep = (props: FormContentProps) => {
  const [isSend, setSend] = useState(false);
  const {onSubmit} = props;
  const {updateFormData, formDataContainsKey, formData} = useFormData();

  const sendVerificationCode = () => {
    setSend(true);
  };

  useEffect(() => {
    if (formDataContainsKey(keys)) {
      onSubmit();
    }
  }, [formData, formDataContainsKey, onSubmit]);

  return (
    <FormContentWrapper>
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
    </FormContentWrapper>
  );
};

export default MobileVerificationStep;
