import {FormControl} from '@chakra-ui/react';
import {FormProps} from 'types/props';
import {
  FormHelperText,
  FormInput,
  FormLabel,
} from './sub/RegisterFormItems';

const MobileVerificationForm = (props: FormProps & {seconds: number}) => {
  const {onChange, seconds} = props;
  return (
    <FormControl>
      <FormLabel>인증번호</FormLabel>
      <FormInput type='number' onChange={onChange} />
      <FormHelperText color='red.500'>
        남은 시간:
        {` ${Math.floor(seconds / 60)}분`}
        {` ${String(seconds % 60).padStart(2, '0')}초`}
      </FormHelperText>
    </FormControl>
  );
};

export default MobileVerificationForm;
