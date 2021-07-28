import {ChakraProvider} from '@chakra-ui/react';
import type {AppProps} from 'next/app';
import {QueryClient, QueryClientProvider} from 'react-query';
// import {ReactQueryDevtools} from 'react-query-devtools';
import {RecoilRoot} from 'recoil';
import Meta from './layout/Meta';
import Layout from './layout/Layout';
import '../public/global.css';

const queryClient = new QueryClient();

const MyApp = ({Component, pageProps}: AppProps) => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <Meta />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      </QueryClientProvider>
    </RecoilRoot>
  );
};

export default MyApp;
