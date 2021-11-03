import {Heading} from '@chakra-ui/layout';
import useFormData from 'hooks/form/useFormData';
import React, {useEffect} from 'react';
import {FormContentProps} from 'types/props';
import FormContentWrapper from './FormContentWrapper';

const FormStepWrapper = (
  props: FormContentProps & {
    children?: React.ReactNode;
    formDataKeys?: string[];
  }
) => {
  const {onSubmit, formDataKeys, children, heading} = props;
  const {formDataContainsKey} = useFormData();

  useEffect(() => {
    if (formDataKeys && !formDataContainsKey(formDataKeys)) {
      return;
    }

    onSubmit();
  }, [formDataContainsKey, formDataKeys, onSubmit]);

  return (
    <React.Fragment>
      <Heading marginBottom='24px' fontSize='26px' textAlign='center'>
        {heading}
      </Heading>
      <FormContentWrapper>{children}</FormContentWrapper>
    </React.Fragment>
  );
};

export default FormStepWrapper;
