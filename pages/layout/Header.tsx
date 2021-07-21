import { CloseIcon, Search2Icon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  FormControl,
  Image,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Link,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import SearchPanel from "./SearchPanel";

let LOGO_WIDTH = 74;

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [keyword, setKeyword] = React.useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(event.target.value);
  };

  const handleReset = () => {
    setKeyword("");
  };

  const onOpenSearchPanel = () => {
    onOpen();
    document.documentElement.style.overflow = "hidden";
  };

  const onCloseSearchPanel = () => {
    onClose();
    document.documentElement.style.overflow = "";
  };

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
          <InputGroup className="searchInput" maxWidth="container.sm">
            <InputLeftElement
              pointerEvents="none"
              color="gray.300"
              fontSize="1.2em"
              children={<Search2Icon color="gray.500" />}
            />
            <Input
              onClick={onOpenSearchPanel}
              onChange={handleChange}
              variant="filled"
              borderRadius="full"
              placeholder="찾으시는 모임이 있으신가요?"
              value={keyword}
            />
            <InputRightElement
              {...(keyword === "" && { display: "none" })}
              children={
                <Button
                  opacity="1"
                  onClick={handleReset}
                  borderRadius="full"
                  colorScheme="blackAlpha"
                  variant="solid"
                  size="xs"
                >
                  <CloseIcon boxSize="2" />
                </Button>
              }
            />
          </InputGroup>
        </FormControl>
        <Center className="navContainer" justifyContent="end"></Center>
      </Container>
      <Divider />
      <SearchPanel
        isOpen={isOpen}
        onOpen={onOpenSearchPanel}
        onClose={onCloseSearchPanel}
      />
    </header>
  );
};

export default Header;
