import React from 'react';
import {CloseIcon, Search2Icon} from '@chakra-ui/icons';
import {
  Box,
  Button,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from '@chakra-ui/react';
import usePageMove from 'hooks/usePageMove';

const SearchProductForm = (props: {
  onOpen: () => void;
  onClose: () => void;
}) => {
  const {onOpen, onClose} = props;
  const [keyword, setKeyword] = React.useState('');
  const {pageMove} = usePageMove();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  const handleReset = () => {
    setKeyword('');
  };

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      search();
    }
  };

  const search = () => {
    pageMove(`/search?keyword=${keyword}`);
    onClose();
  };

  return (
    <Box className='searchFormWrapper' width='540px'>
      <FormControl id='searchProductForm'>
        <InputGroup className='searchInput' maxWidth='container.sm'>
          <InputLeftElement
            pointerEvents='none'
            color='gray.300'
            fontSize='1.2em'
          >
            <Search2Icon color='gray.500' />
          </InputLeftElement>
          <Input
            onClick={onOpen}
            onChange={handleChange}
            onKeyPress={onKeyPress}
            variant='filled'
            borderRadius='full'
            placeholder='찾으시는 모임이 있으신가요?'
            value={keyword}
          />
          <InputRightElement {...(keyword === '' && {display: 'none'})}>
            <Button
              opacity='1'
              onClick={handleReset}
              borderRadius='full'
              colorScheme='blackAlpha'
              variant='solid'
              size='xs'
            >
              <CloseIcon boxSize='2' />
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>
    </Box>
  );
};

export default SearchProductForm;