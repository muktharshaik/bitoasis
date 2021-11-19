import React from 'react';
import styles from '../../styles/TickerDetails.module.css'


const TradeInfo = ({tradeInfo}) => {

    return (
        <div className={styles.tradeMain}>
            <div className={styles.tradeHeading}>
                <h3>Market Trades</h3>
            </div>
            <div className={styles.tradeList}>
                <table>
                    <thead>
                        <tr>
                            <th>Amount</th>
                            <th>Price</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tradeInfo.map((trd,i) => { 
                            return (
                                <tr key={i} className={styles.tableData}>
                                    <td>{trd.amount}</td>
                                    <td>{trd.price}</td>
                                    <td>{trd.time}</td>
                                </tr>
                            );
                        })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TradeInfo