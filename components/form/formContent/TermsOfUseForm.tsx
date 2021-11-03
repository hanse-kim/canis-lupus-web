import {ChevronRightIcon} from '@chakra-ui/icons';
import {Center, FormControl, Link} from '@chakra-ui/react';
import {TosInfo} from 'types/domain';
import {CheckboxChild} from './sub/CustomCheckbox';

const TermsOfUseForm = (props: {
  tos: TosInfo;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isChecked: boolean;
}) => {
  const {tos, onChange, isChecked} = props;

  return (
    <FormControl
      isRequired={tos.isRequired}
      isInvalid={tos.isRequired && !isChecked}
    >
      <Center direction='row' justifyContent='space-between'>
        <CheckboxChild
          checkboxProps={{
            onChange: onChange,
            isChecked: isChecked,
          }}
        >
          {`(${tos.isRequired ? '필수' : '선택'}) ${tos.name}`}
        </CheckboxChild>
        <Link href={tos.url} target='_blank' rel='noopener noreferrer'>
          <ChevronRightIcon boxSize='6' color='gray.400' />
        </Link>
      </Center>
    </FormControl>
  );
};

export default TermsOfUseForm;
