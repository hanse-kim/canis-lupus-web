import produce from 'immer';
import {useState} from 'react';
import {FormErrorContainer} from 'types/hook';
import createObjectFromArray from 'utils/createObjectFromArray';

const useFormError = (key: string[]) => {
  const [error, setError] = useState<FormErrorContainer>(
    createObjectFromArray(key, {isInvalid: false, message: null})
  );

  const updateFormError = (newError: {
    [key: string]: {isInvalid: boolean; message: string | null};
  }) => {
    setError(
      produce(error, (draft) => {
        Object.entries(newError).map(([key, value]) => {
          draft[key] = value;
        });
      })
    );
  };

  const isError = (error: FormErrorContainer) => {
    return Object.values(error)
      .map((item) => item.isInvalid)
      .some(Boolean);
  };

  return {error, updateFormError, isError};
};

export default useFormError;
