import {ChevronRightIcon} from '@chakra-ui/icons';
import {
  Box,
  Center,
  Divider,
  FormControl,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import LoadingSpinner from 'components/common/LoadingSpinner';
import useTermsOfUseList from 'hooks/register/useTermsOfUseList';
import React, {useEffect} from 'react';
import {FormContentProps, TosInfo} from 'types';
import {CheckboxAll, CheckboxChild} from './parts/CustomCheckbox';
import SubmitButton from './parts/SubmitButton';

const TermsOfUseInput = (props: {
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

const TermsOfUseForm = (props: FormContentProps) => {
  const {isLoading, termsOfUseList} = useTermsOfUseList();
  const [checkedItems, setCheckedItems] = React.useState<boolean[]>([]);
  const {update, onSubmit} = props;

  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  const checkAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedItems(checkedItems.map((item) => e.target.checked));
  };

  const checkEach = (e: React.ChangeEvent<HTMLInputElement>, i: number) => {
    setCheckedItems(
      checkedItems.map((item, index) => (index === i ? e.target.checked : item))
    );
  };

  const validation = () => {
    for (let i = 0; i < termsOfUseList.length; i++) {
      if (termsOfUseList[i].is_required && !checkedItems[i]) {
        return false;
      }
    }

    return true;
  };

  useEffect(() => {
    setCheckedItems(new Array(termsOfUseList.length).fill(false));
  }, [termsOfUseList.length]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Box>
      <Text marginBottom='5'>
        아래 약관에 동의하시고 이거모임에서 목표를 이루어보세요
      </Text>
      <Stack spacing={3}>
        <Divider />
        <CheckboxAll
          checkboxProps={{
            onChange: checkAll,
            isChecked: allChecked,
            isIndeterminate: isIndeterminate,
          }}
        >
          모두 동의합니다
        </CheckboxAll>
        <Divider />
        {termsOfUseList.map((tos, index) => (
          <TermsOfUseInput
            key={index}
            tos={tos}
            onChange={(e) => {
              checkEach(e, index);
            }}
            isChecked={checkedItems[index]}
          />
        ))}
      </Stack>
      <SubmitButton
        onClick={() => {
          console.log(props);
          update('tos', checkedItems);
          onSubmit();
        }}
        disabled={!validation()}
      >
        다음
      </SubmitButton>
    </Box>
  );
};

export default TermsOfUseForm;
