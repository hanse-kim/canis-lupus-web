import useFormData from 'hooks/form/useFormData';
import useFormError from 'hooks/form/useFormError';
import useIntroduceValidation from 'hooks/form/validation/useIntroduceValidation';
import useNameValidation from 'hooks/form/validation/useNameValidation';
import useProfileImageValidation from 'hooks/form/validation/useProfileImageValidation';
import React, {useState} from 'react';

const useProfileHooks = () => {
  const {updateFormData} = useFormData();

  const {error, updateFormError, isError} = useFormError([
    'profileImage',
    'name',
    'introduce',
  ]);
  const [profileImage, setProfileImage] = useState<File>();
  const [profileImageUrl, setProfileImgUrl] = useState('');
  const [name, setName] = useState('');
  const [introduce, setIntroduce] = useState('');
  const {validateProfileImage} = useProfileImageValidation();
  const {validateName} = useNameValidation();
  const {validateIntroduce} = useIntroduceValidation();

  const onPropfileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const image = e.target.files![0];
    const imageUrl = URL.createObjectURL(image);
    setProfileImage(image);
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
      image: validateProfileImage(profileImage),
      name: validateName(name),
      introduce: validateIntroduce(introduce),
    };
    updateFormError(validateResults);
    console.log(profileImage);
    const isSubmittable = !isError(validateResults);
    if (isSubmittable) {
      updateFormData({
        image: profileImage,
        name,
        introduce,
      });
    }
  };

  const disabled = !name || !introduce || !profileImage;

  return {
    error,
    profileImage,
    profileImageUrl,
    onPropfileImageChange,
    onNameChange,
    onIntroduceChange,
    onSubmitClick,
    disabled,
  };
};

export default useProfileHooks;
