import '../styles/globals.css'
import Head from 'next/head'

import Layout from '../components/layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
