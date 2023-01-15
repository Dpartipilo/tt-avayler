import '../styles/globals.scss';
import { AppProvider } from '../src/Providers/AppProvider';
import { Header } from '../src/components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <div className='app'>
        <Header />
        <Component {...pageProps} />;
      </div>
    </AppProvider>
  );
}

export default MyApp;
