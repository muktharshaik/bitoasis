import { useEffect, useState, useContext } from 'react';
import { useRouter } from 'next/router'
import styles from '../../styles/TickerDetails.module.css'
import { getTradeInfo } from '../api'
import moment from 'moment'
import TickerInfo from '../../components/tickerDetails/TickerInfo'
import TradeInfo from '../../components/tickerDetails/TradeInfo'
import tickersContext from '../../store/index';


const TickerDetails = ({tradeInfo}) => {
    
    const router = useRouter()
    const tickerId = router.query.tickerid
    const [tickersData, setTickersData] = useContext(tickersContext);
    const [indexValue, setIndexValue] = useState(0);
    const [prevTicker, setPrevTicker] = useState({});
    const [nextTicker, setNextTicker] = useState({});
    
    const [ticker, setTicker] = useState({});

    useEffect(() => {
        const tickerObj = tickersData.find((ticker) => ticker.symbol == tickerId);
        setTicker({...ticker, ...tickerObj});
        const index = tickersData.findIndex((tkr) => tkr.symbol == tickerId)
        setIndexValue(index)
        if (index != 0 && index != tickersData.length) {
            setNextTicker(tickersData[index + 1]);
            setPrevTicker(tickersData[index - 1])
        }
    }, [tickerId])
    // console.log(">>>> ticker id", tickerId)


    // //Ticker INFO
    // const tickerInfo = JSON.stringify({
    //     event: 'subscribe', 
    //     channel: 'trades',
    //     symbol: `${tickerId}`
    // });
    // webS.on('open', ()=> webS.send(tickerInfo));
    // webS.on('message', (tickerData) => {
    //     console.log(">>>>>>>> TICKER INFO <<<<<<", Buffer.from(tickerData, 'base64').toString('ascii'))
    // })

    //Trade INFO

    // const getTradeInfo = async (symbol) => {

    //     let msg = JSON.stringify({ 
    //       event: 'subscribe', 
    //       channel: 'trades', 
    //       symbol: `${symbol}` 
    //     })
        
    //     webS.on('open', () => webS.send(msg));
    //     webS.on('message', (data) => {return data})
    // }

    const handleClick = (e) => {
        if (e.target.innerText == "Next") {
            router.push(`/${nextTicker.symbol}`)
        } else if (e.target.innerText == "Prev") {
            router.push(`/${prevTicker.symbol}`)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.outerContainer}>
                <div className={styles.tickerContainer}>
                    {indexValue != 0 && <p onClick={handleClick} className={styles.navBtn}>Prev</p>}
                    <TickerInfo ticker={ticker}/>
                    {indexValue != tickersData.length && <p onClick={handleClick} className={styles.navBtn}>Next</p>}
                </div>
                <TradeInfo tradeInfo={tradeInfo}/>
            </div>
        </div>
    )
}
export async function getServerSideProps({ query }) {
    const tickerId = query.tickerid;
    const tradeInfo = []

    const resData = await getTradeInfo(tickerId);
    resData.map((trade) => {
        tradeInfo.push({
            amount: trade[2].toFixed(2),
            price: trade[3].toFixed(2),
            time: moment(trade[1]).format('hh:mm:ss a')
        })
    })

    return {
        props: {
            tradeInfo
        }
    }

}

export default TickerDetails