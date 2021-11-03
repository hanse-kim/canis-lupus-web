import {Box, Divider, Flex, HStack, Link, Stack} from '@chakra-ui/layout';
import Container from 'components/common/Container';
import {colors} from 'style';

const footerMenu = [
  {title: '개인정보취급방침', url: '/terms/privacyPolicy'},
  {title: '이용약관', url: '/terms/termsOfUse'},
  {title: '공지사항', url: '/notice'},
  {title: '자주 묻는 질문', url: '/faq'},
];

const corperation = '(주)이건모임';

const footerInfo = [
  '(주)이건모임  /  대표이사: 홍길동  /  사업자 등록번호: 1234-45-12345  /  통신판매업번호: 2021-강남-404호',
  '서울특별시 강남구 테헤란로 311 아남타워빌딩 7층 (우편번호 : 06151)',
];

const Footer = () => {
  return (
    <footer
      style={{
        width: '100%',
        backgroundColor: colors.panelGray,
        minHeight: '290px',
      }}
    >
      <Container
        className='footerWrapper'
        display='flex'
        flexDirection='column'
        marginY='6'
      >
        <Flex minHeight='60px'>
          <HStack className='footerMenu' spacing='23px'>
            {footerMenu.map((item, index) => (
              <Link
                key={index}
                href={item.url}
                fontWeight={index === 0 ? 'bold' : 'medium'}
              >
                {item.title}
              </Link>
            ))}
          </HStack>
        </Flex>
        <Divider borderColor={colors.mainGray[0]} />
        <Stack spacing='8px' paddingTop='40px' paddingBottom='96px'>
          <Box className='corperation' fontSize='18px' fontWeight='bold'>
            {corperation}
          </Box>
          <Stack className='info' color='#999' spacing='6px'>
            {footerInfo.map((item, index) => (
              <Box key={index}>{item}</Box>
            ))}
          </Stack>
        </Stack>
      </Container>
    </footer>
  );
};

export default Footer;
