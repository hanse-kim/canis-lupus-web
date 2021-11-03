import {AddIcon} from '@chakra-ui/icons';
import {Button} from 'components/common/_basic';
import usePageMove from 'hooks/usePageMove';

const CreateGroupButton = () => {
  const {pageMove} = usePageMove();
  return (
    <Button
      width='36px'
      height='36px'
      padding='0'
      position='sticky'
      left='1280px'
      bottom='10'
      colorScheme='blue'
      borderRadius='full'
      onClick={() => pageMove('/createGroup')}
    >
      <AddIcon />
    </Button>
  );
};

export default CreateGroupButton;
