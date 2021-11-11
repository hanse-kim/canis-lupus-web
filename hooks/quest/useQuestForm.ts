import useFormError from 'hooks/form/useFormError';
import {useCallback, useState} from 'react';
import useCreateQuest from './useCreateQuest';

const useQuestForm = (
  formDataKeys: string[],
  meeting: string,
  callback?: () => void
) => {
  const {error, updateFormError, isError} = useFormError(formDataKeys);
  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const {createQuest, isCreating} = useCreateQuest(callback);

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const onContentsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContents(e.target.value);
  };

  const onSubmitClick = () => {
    const validateResults = {
      title: {isInvalid: false, message: ''},
      contents: {isInvalid: false, message: ''},
      meeting: {isInvalid: false, message: ''},
    };
    updateFormError(validateResults);

    if (!isError(validateResults)) {
      createQuest({title, contents, meeting, badges: []});
    }
  };

  const resetQuestForm = useCallback(() => {
    setTitle('');
    setContents('');
  }, []);

  const isSubmitable = title && contents;

  return {
    resetQuestForm,
    onTitleChange,
    onContentsChange,
    onSubmitClick,
    title,
    contents,
    isSubmitable,
    isCreating,
    error,
  };
};

export default useQuestForm;
