import useAuth from 'hooks/auth/useAuth';
import useFormError from 'hooks/form/useFormError';
import {useCallback, useEffect, useState} from 'react';
import usePost from './usePost';

const usePostForm = (
  formDataKeys: string[],
  meeting: string,
  callback?: () => void
) => {
  const {userData} = useAuth();
  const {error, updateFormError, isError} = useFormError(formDataKeys);
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [author, setAuthor] = useState('');
  const {post, isPosting} = usePost(callback);

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onContentsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContents(e.target.value);
  };

  const onImageChange = useCallback((url: string) => {
    setImageUrls([url]);
  }, []);

  const onSubmitClick = () => {
    const validateResults = {
      title: {isInvalid: false, message: ''},
      contents: {isInvalid: false, message: ''},
      imageUrls: {isInvalid: false, message: ''},
      author: {isInvalid: false, message: ''},
      meeting: {isInvalid: false, message: ''},
    };
    updateFormError(validateResults);

    if (!isError(validateResults)) {
      post({title, contents, imageUrls, meeting, author});
    }
  };

  const resetPostForm = useCallback(() => {
    setTitle('');
    setContents('');
    setImageUrls([]);
  }, []);

  useEffect(() => {
    setAuthor(userData._id);
  }, [userData._id]);

  const isSubmitable = title && contents;

  return {
    resetPostForm,
    onTitleChange,
    onContentsChange,
    onImageChange,
    onSubmitClick,
    title,
    contents,
    imageUrls,
    isSubmitable,
    isPosting,
    error,
  };
};

export default usePostForm;
