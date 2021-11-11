import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Divider,
  ModalFooter,
} from '@chakra-ui/react';
import useModal from 'hooks/useModal';
import React from 'react';

const Modal = (props: {
  title: string;
  children?: React.ReactNode;
  stateKey?: string;
}) => {
  const {isOpen, onClose} = useModal(props.stateKey);

  return (
    <ChakraModal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent width='360px' PaddingBottom='36px'>
        <ModalHeader textAlign='center' fontSize='20px' paddingY='18px'>
          {props.title}
        </ModalHeader>
        <ModalCloseButton />
        <Divider />
        <ModalBody paddingX='24px' paddingTop='24px'>
          {props.children}
        </ModalBody>
        <ModalFooter />
      </ModalContent>
    </ChakraModal>
  );
};

export default Modal;
