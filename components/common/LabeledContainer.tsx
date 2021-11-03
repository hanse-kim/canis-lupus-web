import {Box, Heading, Link} from '@chakra-ui/react';

const LabeledContainer = (props: {
  children?: React.ReactNode;
  label: string;
  viewMoreUrl?: string;
}) => {
  return (
    <Box className='labeledContainer'>
      <Box
        className='label'
        display='flex'
        justifyContent='space-between'
        marginBottom='5'
      >
        {props.viewMoreUrl && (
          <Link
            href={props.viewMoreUrl}
          >
            <Heading size='md'>{props.label}</Heading>
          </Link>
        )}
        {!props.viewMoreUrl && <Heading size='md'>{props.label}</Heading>}
      </Box>
      <Box className='content'>{props.children}</Box>
    </Box>
  );
};

export default LabeledContainer;
