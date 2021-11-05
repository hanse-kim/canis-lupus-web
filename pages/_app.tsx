import {ChakraProvider} from '@chakra-ui/react';
import type {AppProps} from 'next/app';
import {QueryClient, QueryClientProvider} from 'react-query';
// import {ReactQueryDevtools} from 'react-query-devtools';
import {RecoilRoot} from 'recoil';
import Meta from 'components/layout/Meta';
import 'public/global.css';
import 'public/slick-theme-custom.css';
import axios from 'axios';
import dotenv from 'dotenv';
import defaultChakraTheme from 'style/defaultChakraTheme';
import {useEffect} from 'react';
import {useRouter} from 'next/dist/client/router';
import {colors} from 'style';

const queryClient = new QueryClient();

axios.interceptors.request.use(async (config) => {
  if (!config.headers['Authorization']) {
    dotenv.config();
    const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
    config.headers['Authorization'] = `Bearer ${AIRTABLE_API_KEY}`;
  }
  config.headers['Accept'] = 'application/json';
  config.headers['Content-Type'] = 'application/json';

  return config;
});

const MyApp = ({Component, pageProps}: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    console.log(router.pathname.split('/')[1]);
    if (router.pathname.split('/')[1] === 'group') {
      document.body.style.backgroundColor = '#f8f9fa';
    } else {
      document.body.style.backgroundColor = colors.white;
    }
  }, [router.pathname]);

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider theme={defaultChakraTheme}>
          <Meta />
          <Component {...pageProps} />
        </ChakraProvider>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export default MyApp;
