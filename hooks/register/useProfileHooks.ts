import useFormData from 'hooks/form/useFormData';
import useFormError from 'hooks/form/useFormError';
import useIntroduceValidation from 'hooks/form/validation/useIntroduceValidation';
import useNicknameValidation from 'hooks/form/validation/useNicknameValidation';
import {useState} from 'react';

const useProfileHooks = () => {
  const {updateFormData} = useFormData();

  const {error, updateFormError, isError} = useFormError([
    'nickname',
    'introduce',
  ]);
  const [nickname, setNickname] = useState('');
  const [introduce, setIntroduce] = useState('');
  const {validateNickname} = useNicknameValidation();
  const {validateIntroduce} = useIntroduceValidation();

  const onNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
  };

  const onIntroduceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIntroduce(e.target.value);
  };

  const onSubmitClick = () => {
    const validateResults = {
      nickname: validateNickname(nickname),
      introduce: validateIntroduce(introduce),
    };
    updateFormError(validateResults);

    const isSubmittable = !isError(validateResults);
    if (isSubmittable) {
      updateFormData({
        nickname,
        introduce,
      });
    }
  };
  return {
    error,
    onNicknameChange,
    onIntroduceChange,
    onSubmitClick,
  };
};

export default useProfileHooks;
