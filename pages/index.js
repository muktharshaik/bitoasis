import styles from '../styles/Home.module.css'
import { getAllTickers, getTickerInfo } from './api'
import { useEffect } from 'react'

const Home = (props) => {
  
  useEffect(() => {
    console.log(">>>>>>> TICKER INFO <<<<<<<", props.tickerInfo)
  })

  return (
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.tickerslist}>
            
          </div>
        </div>
      </div>
  )
}
export async function getServerSideProps() {
  let tickers = await getAllTickers();
  let tickerInfo = await getTickerInfo("hello")

  return {
    props: {
      tickers,
      tickerInfo
    }
  }
}

export default Home
