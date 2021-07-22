import { Box, Heading, Link } from "@chakra-ui/react";

const LabeledContainer = (props: {
  children?: React.ReactNode;
  label: string;
  viewMoreUrl?: string;
}) => {
  return (
    <Box className="labeledContainer">
      <Box
        className="label"
        display="flex"
        justifyContent="space-between"
        marginBottom="5"
      >
        <Heading size="md">{props.label}</Heading>
        {props.viewMoreUrl && (
          <Link
            color="gray.500"
            verticalAlign="middle"
            href={props.viewMoreUrl}
          >
            전체 보기
          </Link>
        )}
      </Box>
      <Box className="content">{props.children}</Box>
    </Box>
  );
};

export default LabeledContainer;
