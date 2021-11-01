import {PlusSquareIcon} from '@chakra-ui/icons';
import {Avatar, Center, InputProps} from '@chakra-ui/react';
import ImageUploadButton from 'components/common/ImageUploadButton';
import React from 'react';

const ProfileImageUploadForm = (props: InputProps & {imageUrl?: string}) => {
  const {imageUrl, ...inputProps} = props;

  return (
    <Center>
      <Avatar size='2xl' src={imageUrl}>
        <ImageUploadButton
          buttonProps={{
            position: 'absolute',
            right: '0',
            bottom: '0',
            borderRadius: '9999',
            padding: '0',
          }}
          inputProps={inputProps}
        >
          <PlusSquareIcon />
        </ImageUploadButton>
      </Avatar>
    </Center>
  );
};

export default ProfileImageUploadForm;
