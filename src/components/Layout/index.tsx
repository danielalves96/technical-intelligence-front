import Head from 'next/head';
import { FaArrowAltCircleUp } from 'react-icons/fa';
import ScrollToTop from 'react-scroll-to-top';
import Footer from '../Footer';
import Header from '../Header';
import { SocialNetwork } from '../SocialNetwork';

export default function Layout({ children }: any) {
  return (
    <>
      <Head>
        <title>Technical Intelligence</title>
        <meta
          name="description"
          content="TypeScript starter for Next.js that includes all you need to build amazing apps"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main style={{ minHeight: `58.4vh` }}>{children}</main>
      <SocialNetwork />
      <Footer />
      <ScrollToTop
        smooth
        component={<FaArrowAltCircleUp size="28" color="#181818" />}
      />
    </>
  );
}
