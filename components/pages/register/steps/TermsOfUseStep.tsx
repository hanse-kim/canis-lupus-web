import {ChevronRightIcon} from '@chakra-ui/icons';
import {
  Center,
  Divider,
  FormControl,
  Link,
  Stack,
  Text,
} from '@chakra-ui/react';
import LoadingSpinner from 'components/common/LoadingSpinner';
import useFormData from 'hooks/form/useFormData';
import useTermsOfUseList from 'hooks/register/useTermsOfUseList';
import React, {useEffect} from 'react';
import {FormContentProps, TosInfo} from 'types';
import FormContentWrapper from 'components/form/FormContentWrapper';
import {
  CheckboxAll,
  CheckboxChild,
} from 'components/form/formContent/sub/CustomCheckbox';
import SubmitButton from 'components/form/formContent/sub/SubmitButton';

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

const keys = ['tos'];

const TermsOfUseStep = (props: FormContentProps) => {
  const {isLoading, termsOfUseList} = useTermsOfUseList();
  const [checkedItems, setCheckedItems] = React.useState<boolean[]>([]);
  const {onSubmit} = props;
  const {updateFormData, formDataContainsKey, formData} = useFormData();

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

  useEffect(() => {
    if (formDataContainsKey(keys)) {
      onSubmit();
    }
  }, [formData, formDataContainsKey, onSubmit]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <FormContentWrapper>
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
          updateFormData({tos: checkedItems});
        }}
        disabled={!validation()}
      >
        다음
      </SubmitButton>
    </FormContentWrapper>
  );
};

export default TermsOfUseStep;
