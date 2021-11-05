import useUserInfo from 'hooks/api/useUserInfo';
import useFormError from 'hooks/form/useFormError';
import useSelectInterestsHooks from 'hooks/register/useSelectInterestsHooks';
import {useCallback, useEffect, useMemo, useState} from 'react';
import {UserInfo} from 'types/auth';
import validateIntroduce from 'utils/validation/validateIntroduce';
import validateName from 'utils/validation/validateName';
import useEditProfile from './useEditProfile';

const useEditProfileForm = (formDataKeys: string[], callback?: () => void) => {
  const {userInfo} = useUserInfo();
  const [imageUrl, setImageUrl] = useState('');
  const [name, setName] = useState('');
  const [introduce, setIntroduce] = useState('');
  const {checked, setChecked, onCheckboxChange} = useSelectInterestsHooks();
  const {error, updateFormError, isError} = useFormError(formDataKeys);
  const {editProfile, isEditing} = useEditProfile(callback);

  const initialize = useCallback((userInfo: UserInfo) => {
    setImageUrl(userInfo.imageUrl);
    setChecked(userInfo.categories.map((item) => item._id));
    setName(userInfo.name);
    setIntroduce(userInfo.introduce);
  }, [setChecked]);

  const onImageUrlChange = (imageUrl: string) => {
    setImageUrl(imageUrl);
  };

  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onIntroduceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIntroduce(e.target.value);
  };

  const isSubmitable = useMemo(() => {
    return imageUrl && name && introduce;
  }, [imageUrl, introduce, name]);

  const onSubmitClick = () => {
    const validateResults = {
      imageUrl: {isInvalid: false, message: ''},
      name: validateName(name),
      introduce: validateIntroduce(introduce),
      categories: {isInvalid: false, message: ''},
    };
    updateFormError(validateResults);

    if (!isError(validateResults)) {
      editProfile({imageUrl, name, introduce, categories: checked});
    }
  };

  useEffect(() => {
    if (userInfo) {
      initialize(userInfo);
    }
  }, [initialize, userInfo]);

  return {
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
  };
};

export default useEditProfileForm;
