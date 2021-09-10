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
  const {onSubmit, formDataKeys, children} = props;
  const {formDataContainsKey} = useFormData();

  useEffect(() => {
    if (formDataKeys && !formDataContainsKey(formDataKeys)) {
      return;
    }

    onSubmit();
  }, [formDataContainsKey, formDataKeys, onSubmit]);

  return <FormContentWrapper>{children}</FormContentWrapper>;
};

export default FormStepWrapper;
