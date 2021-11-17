import styles from '../styles/Home.module.css'
import { getAllTickers } from './api'
import { tickersContext } from '../store/index'
import { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import { useRouter } from 'next/router'

const Home = ({ reqTickerData }) => {
  
  const [tickersData, setTickersData] = useState(tickersContext);
  const [mouseEnt, setMouseEnt] = useState(false);

  const router = useRouter();

  useEffect(() => {
    setTickersData(reqTickerData)
  }, [])
  
  return (
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.tickerslist}>
            {reqTickerData.map((ticker, i) => {
                return (
                  <motion.div
                    key={ticker.symbol}
                    className={styles.cardContainer}
                    style={{
                      backgroundColor: ticker.isHigh ? "#04b73c" : "#CF302B",
                      color: ticker.isHigh ? "black" : "white",
                      boxShadow: ticker.isHigh ? "inset 5px 5px 18px #026e24, inset -5px -5px 18px #06ff54" : "inset 5px 5px 18px #7c1d1a,inset -5px -5px 18px #ff433c"
                    }}
                    initial={{ scale: 0 }}
                    animate={{ rotate: 360, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20
                    }}
                    onMouseEnter={() => setMouseEnt(true)}
                    onMouseLeave={() => setMouseEnt(false)}
                    whileHover={{
                      scale: mouseEnt ? 1.05 : 1
                    }}
                    onClick={() => {
                      console.log(">>>>> ROUTER",router);
                      router.push(`/${ticker.symbol}`)
                    }}
                  >
                    <div>
                      <p>{ticker.symbol}</p>
                      <p>{ticker.dailyChange} <span className={styles.pctSpan}>{ticker.percentage} %</span></p>
                    </div>
                  </motion.div>
                )
            })}
          </div>
        </div>
      </div>
  )
}
export async function getServerSideProps() {
  let tickers = await getAllTickers();
  let reqTickerData = [];

  tickers.map((ticker, i) => {
    reqTickerData.push({
      symbol: ticker[0],
      lastPrice: ticker[7].toFixed(2),
      openPrice: ticker[7].toFixed(2),
      dailyChange: ticker[5].toFixed(2),
      percentage: ticker[6].toFixed(2),
      bid: ticker[2].toFixed(2),
      ask: ticker[4].toFixed(2),
      hrRange: `${ticker[9].toFixed(2)} - ${ticker[10].toFixed(2)}`,
      isHigh: ticker[6] > 0 ? true : false
    })
  })

  return {
    props: {
      reqTickerData
    }
  }
}

export default Home
