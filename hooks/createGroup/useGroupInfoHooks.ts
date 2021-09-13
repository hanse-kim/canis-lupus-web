import useGroupNameValidation from 'hooks/form/validation/useGroupNameValidation';
import useGroupInroduceValidation from 'hooks/form/validation/useGroupIntroduceValidation';
import useGroupMemberCountValidation from 'hooks/form/validation/useGroupMemberCountValidation';
import useFormData from 'hooks/form/useFormData';
import useFormError from 'hooks/form/useFormError';
import {useState} from 'react';

const useGroupInfoHooks = (formDataKeys: string[]) => {
  const {validateGroupName} = useGroupNameValidation();
  const {validateGroupIntroduce} = useGroupInroduceValidation();
  const {validateGroupMemberCount} = useGroupMemberCountValidation();
  const [imageUrl, setImageUrl] = useState('');
  const [name, setName] = useState('');
  const [introduce, setIntroduce] = useState('');
  const [memberCount, setMemberCount] = useState(NaN);
  const {error, updateFormError, isError} = useFormError(formDataKeys);
  const {updateFormData} = useFormData();

  const onImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // TODO: 이미지 업로드하고 서버에서 url 가져오는 처리
    setImageUrl(e.target.value);
  };

  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onIntroduceChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setIntroduce(e.target.value);
  };

  const onMemberCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMemberCount(Number(e.target.value));
  };

  const onSubmitClick = () => {
    const validateResults = {
      name: validateGroupName(name),
      introduce: validateGroupIntroduce(introduce),
      memberCount: validateGroupMemberCount(memberCount),
    };
    updateFormError(validateResults);

    const isSubmittable = !isError(validateResults);
    if (isSubmittable) {
      updateFormData({
        imageUrl,
        name,
        introduce,
        memberCount,
      });
    }
  };

  return {
    error,
    onImageChange,
    onNameChange,
    onIntroduceChange,
    onMemberCountChange,
    onSubmitClick,
  };
};

export default useGroupInfoHooks;
