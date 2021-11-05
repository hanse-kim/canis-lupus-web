import {Input} from '@chakra-ui/input';
import {Box, BoxProps} from '@chakra-ui/layout';
import useImageUpload from 'hooks/api/useImageUpload';
import {useEffect, useRef} from 'react';
import {ImageUploadButtonProps} from 'types/props';

const ImageUploadButton = (props: BoxProps & ImageUploadButtonProps) => {
  const {onImageChange, onImageUploading, imageType, ...boxProps} = props;
  const {imageUrl, uploadImage, isLoading, isUploaded} =
    useImageUpload(imageType);
  const inputRef = useRef<HTMLInputElement>(null);

  const onUploadButtonClick = () => {
    inputRef.current?.click();
  };

  useEffect(() => {
    if (onImageUploading) {
      onImageUploading(isLoading);
    }
  }, [isLoading, onImageUploading]);

  useEffect(() => {
    if (isUploaded && onImageChange) {
      onImageChange(imageUrl);
    }
  }, [imageUrl, isUploaded, onImageChange]);

  return (
    <Box
      {...boxProps}
      _hover={{...boxProps._hover, cursor: 'pointer'}}
      onClick={onUploadButtonClick}
    >
      {boxProps.children}
      <Input
        type='file'
        display='none'
        ref={inputRef}
        accept='image/jpg, image/jpeg, image/png'
        onChange={(e) => {
          if (e.target.files) {
            uploadImage(e.target.files[0]);
          }
        }}
      />
    </Box>
  );
};

export default ImageUploadButton;
