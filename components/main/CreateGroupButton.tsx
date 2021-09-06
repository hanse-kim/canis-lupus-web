import {AddIcon} from '@chakra-ui/icons';
import {Button} from '@chakra-ui/react';
import usePageMove from 'hooks/usePageMove';

const CreateGroupButton = () => {
  const {pageMove} = usePageMove();
  return (
    <Button
      padding='0'
      position='fixed'
      bottom='10'
      right='10'
      colorScheme='blue'
      borderRadius='full'
      onClick={() => pageMove('/createGroup')}
    >
      <AddIcon />
    </Button>
  );
};

export default CreateGroupButton;
