import produce from 'immer';
import {atom, useRecoilState} from 'recoil';

const modalState = atom<{[key: string]: boolean}>({
  key: 'modalState',
  default: {default: false},
});

const useModal = (stateKey?: string) => {
  const [isOpen, setOpen] = useRecoilState(modalState);

  const onOpen = () => {
    setOpen(
      produce((draft) => {
        if (stateKey) {
          draft[stateKey] = true;
        } else {
          draft.default = true;
        }
      })
    );
  };

  const onClose = () => {
    setOpen(
      produce((draft) => {
        if (stateKey) {
          draft[stateKey] = false;
        } else {
          draft.default = false;
        }
      })
    );
  };

  return {
    isOpen: stateKey ? isOpen[stateKey] : isOpen.default,
    onOpen,
    onClose,
  };
};

export default useModal;
