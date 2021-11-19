// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import instance from '/utils/instance';

export const getAllTickers = async () => (
  await instance.get('/tickers?symbols=ALL').then(res => (res.data))
)

export const getTradeInfo = async (symbol) => {
  return await instance.get(`/trades/${symbol}/hist`).then((res) => (res.data))
}