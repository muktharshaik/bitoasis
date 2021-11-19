import styles from '../../styles/TickerDetails.module.css'


const TickerInfo = ({ticker}) => {
    return (
        <div 
            className={styles.tickerMain}
        >
            <div className={styles.tickerHeading}>
                <h2>{ticker.symbol}</h2>
            </div>
            <div 
                className={styles.tickerContent}
                style={{
                    background: ticker.isHigh ? "linear-gradient(145deg, #84e767, #6fc256)" : "linear-gradient(145deg, #dd332e, #ba2b27)"
                }}
            
            >
                <div 
                    className={styles.tickerDetails}
                    style={{color: ticker.isHigh ? "black" : "white"}}
                >
                    <h4>Open Price</h4>
                    <p style={{color: ticker.isHigh ? "black" : "white"}}>{ticker.openPrice}</p>
                </div>
                <div 
                    className={styles.tickerDetails}
                    style={{color: ticker.isHigh ? "black" : "white"}}
                >
                    <h4>Daily Change</h4>
                    <p style={{color: ticker.isHigh ? "black" : "white"}}>{ticker.openPrice} ({ticker.dailyChange}%)</p>
                </div>
                <div 
                    className={styles.tickerDetails}
                    style={{color: ticker.isHigh ? "black" : "white"}}
                >
                    <h4>Top Bid</h4>
                    <p style={{color: ticker.isHigh ? "black" : "white"}}>{ticker.bid}</p>
                </div>
                <div 
                    className={styles.tickerDetails}
                    style={{color: ticker.isHigh ? "black" : "white"}}
                >
                    <h4>Top Ask</h4>
                    <p style={{color: ticker.isHigh ? "black" : "white"}}>{ticker.ask}</p>
                </div>
                <div 
                    className={styles.tickerDetails}
                    style={{color: ticker.isHigh ? "black" : "white"}}
                >
                    <h4>Last Price</h4>
                    <p style={{color: ticker.isHigh ? "black" : "white"}}>{ticker.lastPrice}</p>
                </div>
                <div 
                    className={styles.tickerDetails}
                    style={{color: ticker.isHigh ? "black" : "white"}}
                >
                    <h4>24hr Range</h4>
                    <p style={{color: ticker.isHigh ? "black" : "white"}}>{ticker.hrRange}</p>
                </div>
            </div>
        </div>
    )
}

export default TickerInfo