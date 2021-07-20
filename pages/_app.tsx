import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';
import { RecoilRoot } from 'recoil';
import MetaContainer from './global/MetaContainer';
import Layout from './layout/Layout';
import "../public/global.css"

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <MetaContainer />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default MyApp
