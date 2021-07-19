import { Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Container,
  Divider,
  FormControl,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

let LOGO_WIDTH = 74;

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <header>
      <Container
        className="headerWrapper"
        display="flex"
        maxWidth="container.lg"
        marginY="6"
      >
        <Box
          className="logoContainer"
          marginRight="5"
          height="auto"
          marginY="auto"
        >
          <Link className="logoButton" href="/main">
            <Image src="/logo.png" minWidth={`${LOGO_WIDTH}px`} />
          </Link>
        </Box>
        <FormControl id="searchProductForm">
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              color="gray.300"
              fontSize="1.2em"
              children={<Search2Icon color="gray.500" />}
            />
            <Input
              onClick={onOpen}
              variant="filled"
              borderRadius="9999"
              placeholder="찾으시는 모임이 있으신가요?"
              maxWidth="container.sm"
            />
          </InputGroup>
        </FormControl>
        <Center className="navContainer" justifyContent="end"></Center>
      </Container>
      <Divider />
    </header>
  );
};

export default Header;
