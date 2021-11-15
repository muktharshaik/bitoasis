import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { getAllTickers } from './api'
import { useEffect } from 'react'

const Home = (props) => {

  useEffect(() => {
    console.log(">>>>>> tickers", props.tickers)
  })

  return (
    <div className={styles.container}>
      <Head>
        <title>BitOasis</title>
        <meta name="description" content="Bit boasis application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>HI</h1>
    </div>
  )
}
export async function getServerSideProps() {
  let tickers = await getAllTickers();

  return {
    props: {
      tickers
    }
  }
}

export default Home
