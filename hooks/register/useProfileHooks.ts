import useFormData from 'hooks/form/useFormData';
import useFormError from 'hooks/form/useFormError';
import useIntroduceValidation from 'hooks/form/validation/useIntroduceValidation';
import useNameValidation from 'hooks/form/validation/useNameValidation';
import {useState} from 'react';

const useProfileHooks = () => {
  const {updateFormData} = useFormData();

  const {error, updateFormError, isError} = useFormError([
    'name',
    'introduce',
  ]);
  const [name, setName] = useState('');
  const [introduce, setIntroduce] = useState('');
  const {validateName} = useNameValidation();
  const {validateIntroduce} = useIntroduceValidation();

  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onIntroduceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIntroduce(e.target.value);
  };

  const onSubmitClick = () => {
    const validateResults = {
      name: validateName(name),
      introduce: validateIntroduce(introduce),
    };
    updateFormError(validateResults);

    const isSubmittable = !isError(validateResults);
    if (isSubmittable) {
      updateFormData({
        name,
        introduce,
      });
    }
  };
  return {
    error,
    onNameChange,
    onIntroduceChange,
    onSubmitClick,
  };
};

export default useProfileHooks;
