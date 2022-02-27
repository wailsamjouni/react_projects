import Layout from '../components/Layout'
import '../styles/globals.css'
import {useContext} from 'react'
import DataContext from '../context/DataContext';
import {DataProvider} from '../context/DataContext'
function MyApp({ Component, pageProps }) {
  return (
    <DataProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </DataProvider>
  );
}

export default MyApp
