import useFormData from 'hooks/form/useFormData';
import React, {useEffect} from 'react';
import {FormContentProps} from 'types/props';

const RegisterStepWrapper = (
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

  return <React.Fragment>{children}</React.Fragment>;
};

export default RegisterStepWrapper;
