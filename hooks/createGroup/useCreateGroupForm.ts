import useFormError from 'hooks/form/useFormError';
import {useState} from 'react';
import useSelectGroupInterest from './useSelectGroupInterest';
import useCreateGroup from './useCreateGroup';
import validateGroupImage from 'utils/validation/validateGroupImage';
import validateGroupIntroduce from 'utils/validation/validateGroupIntroduce';
import validateGroupMaxPerson from 'utils/validation/validateGroupMaxPerson';
import validateGroupName from 'utils/validation/validateGroupName';

const useCreateGroupForm = (formDataKeys: string[], callback?: () => void) => {
  const [uploadImageState, setUploadImageState] = useState<{
    image?: File;
    imageUrl?: string;
  }>({});
  const [name, setName] = useState('');
  const [introduction, setIntroduction] = useState('');
  const [maxPerson, setMaxPerson] = useState('');
  const {checked, onCheckboxChange} = useSelectGroupInterest();
  const {error, updateFormError, isError} = useFormError(formDataKeys);
  const {createGroup, isCreating, createGroupError} = useCreateGroup(callback);

  const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const image = e.target.files![0];
    const imageUrl = URL.createObjectURL(image);
    setUploadImageState({image, imageUrl});
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
    uploadImageState.image &&
    name &&
    introduction &&
    maxPerson &&
    checked.length;

  const onSubmitClick = () => {
    const validateResults = {
      images: validateGroupImage(uploadImageState.image),
      name: validateGroupName(name),
      introduction: validateGroupIntroduce(introduction),
      maxPerson: validateGroupMaxPerson(maxPerson),
      category: !checked.length ?
        {isInvalid: true, message: '카테고리를 선택해 주세요.'} :
        {isInvalid: false, message: ''},
    };
    updateFormError(validateResults);

    const isSubmittable = !isError(validateResults);
    if (isSubmittable) {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('introduction', introduction);
      formData.append('maxPerson', maxPerson);
      formData.append('images', uploadImageState.image!);
      formData.append('category', checked[0]);
      createGroup({
        name,
        introduction,
        maxPerson,
        images: uploadImageState.image!,
        category: checked[0],
      });
    }
  };

  return {
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
    createGroupError,
  };
};

export default useCreateGroupForm;
