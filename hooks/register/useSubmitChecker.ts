import produce from 'immer';
import {useState} from 'react';

const useSubmitChecker = (keys: string[]) => {
  const createObjectFromArray = (array: string[]) => {
    return array.reduce((acc, cur) => ({...acc, [cur]: false}), {});
  };

  const [passed, setPassedRaw] = useState<{[key: string]: boolean}>(
    createObjectFromArray(keys)
  );

  const setPassed = (key: string, isPassed: boolean) => {
    setPassedRaw(
      produce(passed, (draft) => {
        draft[key] = isPassed;
      })
    );
  };

  const isSubmittable = () => {
    return !Object.entries(passed).every(([k, v]) => v);
  };

  return {
    setPassed,
    isSubmittable,
  };
};

export default useSubmitChecker;
