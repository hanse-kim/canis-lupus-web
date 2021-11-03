import {useRecoilState} from 'recoil';
import {searchPanelState} from 'states';

const useSearchPanel = () => {
  const [isOpen, setOpen] = useRecoilState(searchPanelState);

  const onOpenSearchPanel = () => {
    setOpen(true);
    document.documentElement.style.overflow = 'hidden';
  };

  const onCloseSearchPanel = () => {
    setOpen(false);
    document.documentElement.style.overflow = '';
  };

  return {isOpen, onOpen: onOpenSearchPanel, onClose: onCloseSearchPanel};
};

export default useSearchPanel;
