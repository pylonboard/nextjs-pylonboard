import type { ReactElement, ReactNode } from 'react';

import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import ThemeProvider from 'src/theme/ThemeProvider';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from 'src/createEmotionCache';
import { SidebarProvider } from 'src/contexts/SidebarContext';
import useScrollTop from 'src/hooks/useScrollTop';
import { ApolloProvider } from '@apollo/client';
import client from '../apollo-client';
import { NewRelicSnippet } from '@/components/NewRelicSnippet';
import '../src/styles.css';
import {
  WalletProvider,
  StaticWalletProvider,
  getChainOptions, WalletControllerChainOptions
} from '@terra-money/wallet-provider';

const clientSideEmotionCache = createEmotionCache();

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  Component: NextPageWithLayout;
}

const isDev = process.env.NODE_ENV === 'development'

function MyApp({ defaultNetwork, walletConnectChainIds, ...props}: MyAppProps & WalletControllerChainOptions) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const getLayout = Component.getLayout ?? ((page) => page);
  useScrollTop()

  const app = (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Pylon Board</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {!isDev && (
          <NewRelicSnippet />
        )}
      </Head>
      <SidebarProvider>
        <ThemeProvider>
          <CssBaseline />
          <ApolloProvider client={client}>
            {getLayout(<Component {...pageProps} />)}
          </ApolloProvider>
        </ThemeProvider>
      </SidebarProvider>
    </CacheProvider>
  );
  return typeof window !== 'undefined' ? (
    <WalletProvider
      defaultNetwork={defaultNetwork}
      walletConnectChainIds={walletConnectChainIds}
    >
      {app}
    </WalletProvider>
  ) : (
    <StaticWalletProvider defaultNetwork={defaultNetwork}>
      {app}
    </StaticWalletProvider>
  );
}

MyApp.getInitialProps = async () => {
  const chainOptions = await getChainOptions();
  return {
    ...chainOptions,
  };
};

export default MyApp;
