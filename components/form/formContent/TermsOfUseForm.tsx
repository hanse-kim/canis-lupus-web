import {ChevronRightIcon} from '@chakra-ui/icons';
import {Center, FormControl, Link} from '@chakra-ui/react';
import {TosInfo} from 'types';
import {CheckboxChild} from './sub/CustomCheckbox';

const TermsOfUseForm = (props: {
  tos: TosInfo;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isChecked: boolean;
}) => {
  const {tos, onChange, isChecked} = props;

  const openTos = (content: string) => {
    alert(content);
  };

  return (
    <FormControl
      isRequired={tos.is_required}
      isInvalid={tos.is_required && !isChecked}
    >
      <Center direction='row' justifyContent='space-between'>
        <CheckboxChild
          checkboxProps={{
            onChange: onChange,
            isChecked: isChecked,
          }}
        >
          {`(${tos.is_required ? '필수' : '선택'}) ${tos.name}`}
        </CheckboxChild>
        <Link
          onClick={() => {
            openTos(tos.content);
          }}
        >
          <ChevronRightIcon boxSize='6' color='gray.400' />
        </Link>
      </Center>
    </FormControl>
  );
};

export default TermsOfUseForm;
