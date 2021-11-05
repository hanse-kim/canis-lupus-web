import useFormData from 'hooks/form/useFormData';
import useFormError from 'hooks/form/useFormError';
import React, {useState} from 'react';
import validateIntroduce from 'utils/validation/validateIntroduce';
import validateName from 'utils/validation/validateName';

const useProfileHooks = () => {
  const {updateFormData} = useFormData();

  const {error, updateFormError, isError} = useFormError([
    'imageUrl',
    'name',
    'introduce',
  ]);
  const [profileImageUrl, setProfileImgUrl] = useState('');
  const [name, setName] = useState('');
  const [introduce, setIntroduce] = useState('');

  const onPropfileImageChange = (imageUrl: string) => {
    setProfileImgUrl(imageUrl);
  };

  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onIntroduceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIntroduce(e.target.value);
  };

  const onSubmitClick = () => {
    const validateResults = {
      image: {isInvalid: false, message: ''},
      name: validateName(name),
      introduce: validateIntroduce(introduce),
    };
    updateFormError(validateResults);
    const isSubmittable = !isError(validateResults);
    if (isSubmittable) {
      updateFormData({
        imageUrl: profileImageUrl,
        name,
        introduce,
      });
    }
  };

  const disabled = !name || !introduce || !profileImageUrl;

  return {
    error,
    profileImageUrl,
    onPropfileImageChange,
    onNameChange,
    onIntroduceChange,
    onSubmitClick,
    disabled,
  };
};

export default useProfileHooks;
