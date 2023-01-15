import '../styles/globals.scss';
import { AppProvider } from '../src/Providers/AppProvider';

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <>
        <Component {...pageProps} />;
      </>
    </AppProvider>
  );
}

export default MyApp;
