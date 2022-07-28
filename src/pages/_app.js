import Head from 'next/head';
import { ProviderAuth } from '@hooks/useAuth';
import { ProviderDark } from '@context/ProviderDark';
import { ThemeProvider } from 'next-themes';
import MainLayout from '@layout/MainLayout.js';
// import Script from 'next/script';
import '@styles/tailwind.css';

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <ProviderAuth>

        <ThemeProvider attribute='class'>
          <ProviderDark>
            <MainLayout>
              <Component {...pageProps} />
            </MainLayout>
          </ProviderDark>
        </ThemeProvider>

      </ProviderAuth>

    </>
  );
}

export default MyApp;
