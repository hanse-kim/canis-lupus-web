import {FormControl} from '@chakra-ui/react';
import {FormProps} from 'types';
import {
  RegisterFormHelperText,
  RegisterFormInput,
  RegisterFormLabel,
} from './sub/RegisterFormItems';

const MobileVerificationForm = (props: FormProps & {seconds: number}) => {
  const {onChange, seconds} = props;
  return (
    <FormControl>
      <RegisterFormLabel>인증번호</RegisterFormLabel>
      <RegisterFormInput type='number' onChange={onChange} />
      <RegisterFormHelperText color='red.500'>
        남은 시간:
        {` ${Math.floor(seconds / 60)}분`}
        {` ${String(seconds % 60).padStart(2, '0')}초`}
      </RegisterFormHelperText>
    </FormControl>
  );
};

export default MobileVerificationForm;
