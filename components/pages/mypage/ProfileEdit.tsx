import {Box, Heading, Link, Stack} from '@chakra-ui/react';
import React, {useState} from 'react';
import InputForm from 'components/form/formContent/InputForm';
import SubmitButton from 'components/form/formContent/sub/SubmitButton';
import useCategoryList from 'hooks/api/useCategoryList';
import CheckboxForm from 'components/form/formContent/CheckboxForm';
import ProfileImageUploadForm from 'components/form/formContent/ProfileImageUploadForm';
import useEditProfileForm from 'hooks/mypage/useEditProfileForm';
import {colors} from 'style';
import useModal from 'hooks/useModal';
import Modal from 'components/common/_basic/Modal';
import {CustomCheckbox} from 'components/form/formContent/sub/CustomCheckbox';
import {Button} from 'components/common/_basic';
import useResign from 'hooks/auth/useResign';
import usePageMove from 'hooks/usePageMove';
import useAuth from 'hooks/auth/useAuth';

const ResignModal = () => {
  const [checked, setChecked] = useState(false);
  const {pageMove} = usePageMove();
  const {resign, isResigning} = useResign(() => {
    pageMove('/');
  });

  return (
    <Modal title='계정탈퇴'>
      <Heading fontSize='20px' marginBottom='16px'>
        정말로 탈퇴하시겠습니까?
      </Heading>
      <Box height='150px'>회원탈퇴시 정보가 영구히 삭제됩니다.</Box>
      <CustomCheckbox
        textStyle={{color: colors.mainGray[1]}}
        checkboxProps={{
          checked: checked,
          onChange: (e) => {
            setChecked(e.target.checked);
          },
        }}
      >
        위 사항에 동의하며, 계정을 삭제합니다.
      </CustomCheckbox>
      <Button
        width='100%'
        height='52px'
        marginTop='16px'
        disabled={!checked}
        onClick={() => {
          resign();
        }}
        isLoading={isResigning}
      >
        탈퇴하기
      </Button>
    </Modal>
  );
};

const ProfileEdit = () => {
  const {updateName} = useAuth();
  const {categoryList, isLoading: isCategoryListLoading} = useCategoryList();
  const {pageMove} = usePageMove();
  const {
    imageUrl,
    name,
    introduce,
    checked,
    onImageUrlChange,
    onNameChange,
    onIntroduceChange,
    onCheckboxChange,
    error,
    isSubmitable,
    onSubmitClick,
    isEditing,
  } = useEditProfileForm(
    ['imageUrl', 'name', 'introduce', 'categories'],
    () => {
      pageMove('/mypage');
      updateName(name);
    }
  );
  const {onOpen} = useModal();

  return (
    <Box
      className='createGroupBox'
      maxWidth='360px'
      marginX='auto'
      paddingTop='36px'
      paddingBottom='80px'
    >
      <Heading paddingBottom='24px' fontSize='26px' textAlign='center'>
        프로필 편집
      </Heading>
      <Stack spacing='28px'>
        <ProfileImageUploadForm
          imageUrl={imageUrl}
          onImageChange={onImageUrlChange}
        />
        <InputForm
          error={error.name}
          onChange={onNameChange}
          value={name}
          label='닉네임'
          placeholder='닉네임을 입력해주세요'
          maxLength={20}
          helperText='20자 이내로 입력할 수 있어요'
        />
        <InputForm
          error={error.introduce}
          onChange={onIntroduceChange}
          value={introduce}
          label='자기소개'
          placeholder='자기소개를 입력해주세요'
          helperText='나이와 직업, 도시 따위를 자유롭게 소개하세요.'
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
        marginBottom='16px'
        onClick={onSubmitClick}
        disabled={!isSubmitable}
        isLoading={isEditing}
      >
        수정하기
      </SubmitButton>
      <Link color={colors.mainGray[1]} onClick={onOpen}>
        회원탈퇴
      </Link>
      <ResignModal />
    </Box>
  );
};

export default ProfileEdit;
