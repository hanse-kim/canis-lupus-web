import {atom, useRecoilState} from 'recoil';

const modalState = atom({
  key: 'modalState',
  default: false,
});

const useModal = () => {
  const [isOpen, setOpen] = useRecoilState(modalState);

  const onOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return {
    isOpen,
    onOpen,
    onClose,
  };
};

export default useModal;
