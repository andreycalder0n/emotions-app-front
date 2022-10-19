import Head from 'next/head';
import { ProviderAuth } from '@hooks/useAuth';
import { ThemeProvider } from 'next-themes';
import { ProviderDark } from '@context/ProviderDark';
import { Toaster } from 'react-hot-toast';
import { ProviderThought } from '@context/ProviderThought'

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

            <ProviderThought>

              <Component {...pageProps} />

              <Toaster />
            </ProviderThought>

          </ProviderDark>
        </ThemeProvider>

      </ProviderAuth>

    </>
  );
}

export default MyApp;
