import { ChakraProvider } from '@chakra-ui/react';
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';
import { RecoilRoot } from 'recoil';

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <Component {...pageProps} />
        </ChakraProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default MyApp
