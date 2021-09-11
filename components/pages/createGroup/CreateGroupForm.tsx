import {Box, Heading} from '@chakra-ui/react';
import {useCallback, useEffect} from 'react';
import useFormData from 'hooks/form/useFormData';
import useFormStep from 'hooks/form/useFormStep';
import usePageMove from 'hooks/usePageMove';
import SelectGroupInterestStep from './steps/SelectGroupInterestStep';
import GroupInfoForm from './steps/GroupInfoForm';

const createGroupSteps = ['관심사선택', '모임정보입력'] as const;
type CreateGroupStepType = typeof createGroupSteps[number];
const steps = createGroupSteps.slice();

const CreateGroupForm = () => {
  const {step, resetStep, toNext} = useFormStep<CreateGroupStepType>(steps);
  const {resetFormData, formData} = useFormData();
  const {getRedirect, pageMove} = usePageMove();

  const submit = useCallback(() => {
    alert(JSON.stringify(formData, null, 2));
    const redirect = getRedirect();
    if (redirect) {
      pageMove(redirect);
    } else {
      pageMove('/main');
    }
  }, [formData, getRedirect, pageMove]);

  useEffect(() => {
    resetFormData();
    resetStep();
  }, [resetFormData, resetStep]);

  return (
    <Box className='registerBox' maxWidth='320px' marginX='auto'>
      <Heading paddingY='10' size='md' textAlign='center'>
        모임개설
      </Heading>
      {step === '관심사선택' && <SelectGroupInterestStep onSubmit={toNext} />}
      {step === '모임정보입력' && <GroupInfoForm onSubmit={submit} />}
    </Box>
  );
};

export default CreateGroupForm;
