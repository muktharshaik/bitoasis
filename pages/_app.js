import '../styles/globals.css'
import Head from 'next/head'
import NavBar from '../components/navbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>BitOasis</title>
        <meta name="description" content="Bit boasis application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp