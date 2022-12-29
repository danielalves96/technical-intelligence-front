import { AppProps } from 'next/app';
import GlobalStyle from '../styles/global';
import Layout from '@/components/Layout';
import '../styles/global.scss';
import '../i18n';
import { Provider } from 'urql';
import { client, ssrCache } from '@/lib/urql';

export default function MyApp({ Component, pageProps }: AppProps) {
  if (pageProps.urqlState) {
    ssrCache.restoreData(pageProps.urqlState);
  }

  return (
    <Provider value={client}>
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
