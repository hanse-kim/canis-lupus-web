import produce from 'immer';
import {atom, useRecoilState} from 'recoil';

const formDataState = atom<{[key: string]: any}>({
  key: 'useFormDataState',
  default: {},
});

const useFormData = () => {
  const [formData, setFormData] = useRecoilState(formDataState);

  const resetFormData = () => {
    setFormData({});
  };

  const updateFormData = (data: {[key: string]: any}) => {
    setFormData(
      produce(formData, (draft) => {
        Object.entries(data).map(([key, value]) => {
          draft[key] = value;
        });
      })
    );
  };

  return {
    resetFormData,
    updateFormData,
    formData,
  };
};

export default useFormData;
