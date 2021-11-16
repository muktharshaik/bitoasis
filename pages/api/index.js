// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import instance from '/utils/instance';
import ws from 'ws';

const webS = new ws(process.env.NEXT_PUBLIC_SOCKET_ENDPOINT);

export const getAllTickers = async () => (
  await instance.get('/tickers?symbols=ALL').then(res => (res.data))
)

export const getTickerInfo = async (symbol) => {

  let msg = JSON.stringify({ 
    event: 'subscribe', 
    channel: 'ticker', 
    symbol: `tBTCUSD` 
  })
  
  webS.on('open', () => webS.send(msg));
  return webS.on('message', (data) => {return JSON.parse(data)})
}