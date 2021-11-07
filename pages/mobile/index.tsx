import {Image} from '@chakra-ui/image';
import {Box, Center, Flex, Heading, Stack} from '@chakra-ui/layout';
import {Button} from 'components/common/_basic';
import usePageMove from 'hooks/usePageMove';

const storeUrl = 'https://play.google.com/';

const Mobile = () => {
  const {pageMove} = usePageMove();

  return (
    <Box
      className='background'
      height='100vh'
      width='100vw'
      backgroundColor='#edf2f8'
    >
      <Flex
        className='container'
        maxWidth='375px'
        margin='0 auto'
        flexDirection='column'
        justifyContent='space-between'
        height='full'
      >
        <Box textAlign='center'>
          <Center className='logoContainer' height='40px'>
            <Box height='16px' width='81px'>
              <Image src='/logo.svg' alt='logo' width='full' height='full' />
            </Box>
          </Center>
          <Heading marginTop='40px' fontSize='28px'>
            환영합니다 🙌
          </Heading>
          <Box marginTop='12px' color='#4a4a4a'>
            이건모임에서 목표를 달성해보세요!
          </Box>
        </Box>
        <Box marginX='21px' position='relative'>
          <Stack alignItems='center'>
            {[0, 1, 2, 3].map((item, index) => {
              return (
                <Flex
                  key={index}
                  width='full'
                  justifyContent={index % 2 === 0 ? 'flex-start' : 'flex-end'}
                >
                  <Box>
                    <Image
                      src={`/images/messageImg_${index}.svg`}
                      alt='msgBox'
                    />
                  </Box>
                </Flex>
              );
            })}
            <Box>
              <Image src='/images/landingImg.png' alt='landing' />
            </Box>
          </Stack>
          <Button
            position='absolute'
            bottom='21px'
            width='full'
            height='48px'
            onClick={() => {
              pageMove(storeUrl);
            }}
          >
            지금 바로 앱 다운로드하기
          </Button>
        </Box>
      </Flex>
    </Box>
  );
};

export default Mobile;
