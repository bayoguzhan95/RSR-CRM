import { ToastContainer } from 'react-toastify';
import Layout from '../components/Layout/Layout';
import '../styles/globals.css';
import 'antd/dist/antd.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <ToastContainer position="top-center" />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
