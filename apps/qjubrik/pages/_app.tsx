import { AppProps } from 'next/app';
import Head from 'next/head';
import MyNewComponent from '../components/my-new-component/my-new-component';
import './styles.css';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to qjubrik!</title>
      </Head>
      <MyNewComponent />
      <main className="app">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default CustomApp;
