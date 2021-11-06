import {Button as ChakraButton} from '@chakra-ui/button';
import {Box, Stack} from '@chakra-ui/layout';
import {Button, Modal} from 'components/common/_basic';
import ImageUploadForm from 'components/form/formContent/ImageUploadForm';
import InputForm from 'components/form/formContent/InputForm';
import TextareaForm from 'components/form/formContent/TextareaForm';
import usePostForm from 'hooks/post/usePostForm';
import useModal from 'hooks/useModal';
import React from 'react';
import {colors} from 'style';
import {SpecificGroupInfo} from 'types/group';

const PostModal = (props: {groupId: string}) => {
  const {onClose} = useModal();
  const {
    title,
    contents,
    onTitleChange,
    onContentsChange,
    onImageChange,
    onSubmitClick,
    imageUrls,
    isSubmitable,
    isPosting,
    resetPostForm,
  } = usePostForm(
    ['title', 'contents', 'imageUrls', 'author', 'meeting'],
    props.groupId,
    () => {
      onClose();
    resetPostForm();
    }
  );

  return (
    <Modal title='글 작성'>
      <Stack spacing='20px'>
        <InputForm
          onChange={onTitleChange}
          value={title}
          label='제목'
          placeholder='제목을 입력해주세요'
        />
        <TextareaForm
          onChange={onContentsChange}
          value={contents}
          label='내용 작성'
          placeholder='내용을 작성해주세요'
          resize='none'
          height='180px'
        />
        <ImageUploadForm
          onImageChange={onImageChange}
          imageUrl={imageUrls.length ? imageUrls[0] : undefined}
          label='사진'
        />
      </Stack>
      <Button
        onClick={onSubmitClick}
        height='52px'
        width='full'
        marginTop='32px'
        disabled={!isSubmitable}
        isLoading={isPosting}
      >
        작성완료
      </Button>
    </Modal>
  );
};

const PostTab = (props: {groupInfo: SpecificGroupInfo}) => {
  const {onOpen} = useModal();

  return (
    <Box padding='16px'>
      <ChakraButton
        onClick={onOpen}
        variant='outline'
        colorScheme='whiteAlpha'
        color='#999'
        height='49px'
        width='full'
        justifyContent='flex-start'
        fontWeight='normal'
        borderColor={colors.mainGray[0]}
      >
        새로운 소식을 남겨주세요.
      </ChakraButton>
      <PostModal groupId={props.groupInfo._id} />
    </Box>
  );
};

export default PostTab;
