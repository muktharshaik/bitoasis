const ws = require('ws')
const w = new ws('wss://api-pub.bitfinex.com/ws/2')
const buffer = require('buffer');

w.on('message', (msg) => {
    const reqObj = buffer.Buffer.from(msg, 'base64').toString('ascii')
    console.log(">>>>> FINAL OBJ",reqObj)
})

let msg = JSON.stringify({ 
  event: 'subscribe', 
  channel: 'trades', 
  symbol: 'tBTCUSD' 
})

w.on('open', () => w.send(msg))