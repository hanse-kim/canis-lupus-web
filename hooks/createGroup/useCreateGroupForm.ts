import useFormError from 'hooks/form/useFormError';
import {useState} from 'react';
import useSelectGroupInterest from './useSelectGroupInterest';
import useCreateGroup from './useCreateGroup';
import validateGroupIntroduce from 'utils/validation/validateGroupIntroduce';
import validateGroupMaxPerson from 'utils/validation/validateGroupMaxPerson';
import validateGroupName from 'utils/validation/validateGroupName';

const useCreateGroupForm = (formDataKeys: string[], callback?: () => void) => {
  const [imageUrl, setImageUrl] = useState('');
  const [name, setName] = useState('');
  const [introduction, setIntroduction] = useState('');
  const [maxPerson, setMaxPerson] = useState('');
  const {checked, onCheckboxChange} = useSelectGroupInterest();
  const {error, updateFormError, isError} = useFormError(formDataKeys);
  const {createGroup, isCreating, createGroupError} = useCreateGroup(callback);

  const onImageChange = (imageUrl: string) => {
    setImageUrl(imageUrl);
  };

  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onIntroductionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setIntroduction(e.target.value);
  };

  const onMaxPersonChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxPerson(e.target.value);
  };

  const isSubmitable =
    imageUrl && name && introduction && maxPerson && checked.length;

  const onSubmitClick = () => {
    const validateResults = {
      images: {isInvalid: false, message: ''},
      name: validateGroupName(name),
      introduction: validateGroupIntroduce(introduction),
      maxPerson: validateGroupMaxPerson(maxPerson),
      category: !checked.length ?
        {isInvalid: true, message: '카테고리를 선택해 주세요.'} :
        {isInvalid: false, message: ''},
    };
    updateFormError(validateResults);

    if (!isError(validateResults)) {
      createGroup({
        name,
        introduction,
        maxPerson,
        imageUrls: [imageUrl],
        category: checked[0],
      });
    }
  };

  return {
    error,
    checked,
    imageUrl,
    onImageChange,
    onNameChange,
    onIntroductionChange,
    onMaxPersonChange,
    onCheckboxChange,
    onSubmitClick,
    isSubmitable,
    isCreating,
    createGroupError,
  };
};

export default useCreateGroupForm;
