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
