import styles from '../styles/Home.module.css'
import { getAllTickers } from './api'
import ws from 'ws';
import { useEffect } from 'react';

const webS = new ws(process.env.NEXT_PUBLIC_SOCKET_ENDPOINT);


const getTickerInfo = async (symbol) => {

  let msg = JSON.stringify({ 
    event: 'subscribe', 
    channel: 'ticker', 
    symbol: `${symbol}` 
  })
    
  webS.on('open', () => webS.send(msg));
  const val = webS.on('message', (msg) => {return msg})
  return val
}

const Home = (props) => {

  useEffect(async () => {
    const tickerVal = getTickerInfo('tBTCUSD')
    console.log(">>>>>>>>>>>> value <<<<<<<<<<<", tickerVal);
  }, [])
  
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

  return {
    props: {
      tickers
    }
  }
}

export default Home
