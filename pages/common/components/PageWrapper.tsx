import React from "react";
import { Container } from "@chakra-ui/layout";

const styles = {
  maxWidth: "container.lg",
};

const PageWrapper = (props: { children?: React.ReactNode }) => {
  return (
    <Container {...styles} className="pageWrapper">
      {props.children}
    </Container>
  );
};

export default PageWrapper;
