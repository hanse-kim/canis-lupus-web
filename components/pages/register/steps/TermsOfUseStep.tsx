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
import useTermsOfUseList from 'hooks/register/useTermsOfUseList';
import React, {useEffect} from 'react';
import {FormContentProps, TosInfo} from 'types';
import FormContentWrapper from 'components/form/FormContentWrapper';
import {
  CheckboxAll,
  CheckboxChild,
} from 'components/form/formContent/sub/CustomCheckbox';
import SubmitButton from 'components/form/formContent/sub/SubmitButton';
import useTermsOfUseHooks from 'hooks/register/useTermsOfUseHooks';

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

const TermsOfUseStep = (props: FormContentProps) => {
  const {onSubmit} = props;
  const {isLoading, termsOfUseList} = useTermsOfUseList();
  const {
    resetCheckItems,
    checkAll,
    allChecked,
    isIndeterminate,
    checkEach,
    checkedItems,
    onSubmitClick,
  } = useTermsOfUseHooks(termsOfUseList);

  useEffect(() => {
    resetCheckItems();
  }, [resetCheckItems]);

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
          onSubmitClick(onSubmit);
        }}
      >
        다음
      </SubmitButton>
    </FormContentWrapper>
  );
};

export default TermsOfUseStep;
