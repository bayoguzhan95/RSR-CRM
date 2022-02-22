import { ToastContainer } from 'react-toastify';
import Layout from '../components/layout/Layout';
import '../styles/globals.css';
import 'antd/dist/antd.css';
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <ToastContainer position="top-right" />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
