import produce from 'immer';
import {useCallback, useState} from 'react';
import {FormError} from 'types';

const useFormError = (key: string[]) => {
  const createObjectFromArray = (array: string[], defaultValue: any) => {
    return array.reduce((acc, cur) => ({...acc, [cur]: defaultValue}), {});
  };

  const [error, setError] = useState<FormError>(
    createObjectFromArray(key, {isInvalid: false, message: null})
  );

  const updateFormError = (newError: {
    [key: string]: {isInvalid: boolean; message: string | null};
  }) => {
    console.log('update');
    console.log(newError);
    setError(
      produce(error, (draft) => {
        Object.entries(newError).map(([key, value]) => {
          draft[key] = value;
        });
      })
    );
  };

  const isError = useCallback(() => {
    return Object.values(error)
      .map((item) => item.isInvalid)
      .some(Boolean);
  }, [error]);

  return {error, updateFormError, isError};
};

export default useFormError;
