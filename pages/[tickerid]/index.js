import { useEffect, useState } from 'react';
import ws from 'ws';

const webS = new ws(process.env.NEXT_PUBLIC_SOCKET_ENDPOINT);

const TickerInfo = (props) => {

    //Ticker INFO
    const getTickerInfo = async (symbol) => {

        let msg = JSON.stringify({ 
          event: 'subscribe', 
          channel: 'ticker', 
          symbol: `${symbol}` 
        })
        
        webS.on('open', () => webS.send(msg));
        return webS.on('message', (data) => {return data})
    }

    //Trade INFO

    const getTradeInfo = async (symbol) => {

        let msg = JSON.stringify({ 
          event: 'subscribe', 
          channel: 'trades', 
          symbol: `${symbol}` 
        })
        
        webS.on('open', () => webS.send(msg));
        return webS.on('message', (data) => {return data})
    }

    useEffect(async () => {
        await getTickerInfo(symbol);
        await getTradeInfo(symbol);
    }, [])

    return (
        <div>

        </div>
    )
}

export default TickerInfo