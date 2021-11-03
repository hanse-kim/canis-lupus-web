import {Box, Heading, Stack} from '@chakra-ui/react';
import React from 'react';
import usePageMove from 'hooks/usePageMove';
import InputForm from 'components/form/formContent/InputForm';
import SubmitButton from 'components/form/formContent/sub/SubmitButton';
import TextareaForm from 'components/form/formContent/TextareaForm';
import useCategoryList from 'hooks/api/useCategoryList';
import CheckboxForm from 'components/form/formContent/CheckboxForm';
import ImageUploadForm from 'components/form/formContent/ImageUploadForm';
import useCreateGroupForm from 'hooks/createGroup/useCreateGroupForm';

const CreateGroupForm = () => {
  const {pageMove} = usePageMove();
  const {categoryList, isLoading: isCategoryListLoading} = useCategoryList();
  const {
    error,
    checked,
    uploadImageState,
    onImageChange,
    onNameChange,
    onIntroductionChange,
    onMaxPersonChange,
    onCheckboxChange,
    onSubmitClick,
    isSubmitable,
    isCreating,
  } = useCreateGroupForm(
    ['images', 'introduction', 'name', 'maxPerson', 'category'],
    () => {
      pageMove('/mypages');
    }
  );

  return (
    <Box
      className='createGroupBox'
      maxWidth='360px'
      marginX='auto'
      paddingTop='36px'
      paddingBottom='80px'
    >
      <Heading paddingBottom='24px' fontSize='26px' textAlign='center'>
        모임개설
      </Heading>
      <Stack spacing='24px'>
        <ImageUploadForm
          label='모임 사진'
          placeholder='사진을 등록해주세요.'
          onChange={onImageChange}
          imageUrl={uploadImageState.imageUrl}
        />
        <InputForm
          label='모임이름'
          error={error.name}
          placeholder='모임이름을 입력해주세요.'
          onChange={onNameChange}
        />
        <TextareaForm
          label='모임소개'
          error={error.introduction}
          placeholder='모임소개 및 목표를 설명해주세요.'
          onChange={onIntroductionChange}
        />
        <InputForm
          label='인원 수 (1~15명)'
          error={error.maxPerson}
          type='number'
          min={1}
          max={15}
          onChange={onMaxPersonChange}
        />
        <CheckboxForm
          label='관심사 선택'
          error={error.category}
          isLoading={isCategoryListLoading}
          itemList={Object.values(categoryList).map((item) => {
            return {name: item.name, value: item._id};
          })}
          checked={checked}
          onCheckboxChange={onCheckboxChange}
        />
      </Stack>
      <SubmitButton
        marginTop='32px'
        onClick={onSubmitClick}
        disabled={!isSubmitable}
        isLoading={isCreating}
      >
        개설하기
      </SubmitButton>
    </Box>
  );
};

export default CreateGroupForm;
