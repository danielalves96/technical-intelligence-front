import { AppProps } from 'next/app';
import GlobalStyle from '../styles/global';
import Layout from '@/components/Layout';
import '../styles/global.scss';
import '../i18n';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} />
    </Layout>
  );
}
