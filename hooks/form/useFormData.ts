import produce from 'immer';
import {useCallback} from 'react';
import {atom, useRecoilState} from 'recoil';

const formDataState = atom<{[key: string]: any}>({
  key: 'formDataState',
  default: {},
});

const useFormData = () => {
  const [formData, setFormData] = useRecoilState(formDataState);

  const resetFormData = useCallback(() => {
    setFormData({});
  }, [setFormData]);

  const updateFormData = (data: {[key: string]: any}) => {
    setFormData(
      produce(formData, (draft) => {
        Object.entries(data).map(([key, value]) => {
          draft[key] = value;
        });
      })
    );
  };

  const formDataContainsKey = useCallback(
    (keys: string[]) => {
      let result = true;
      for (const key of keys) {
        if (!(key in formData)) {
          result = false;
          break;
        }
      }

      return result;
    },
    [formData]
  );

  return {
    resetFormData,
    updateFormData,
    formDataContainsKey,
    formData,
  };
};

export default useFormData;
