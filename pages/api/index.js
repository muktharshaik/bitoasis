// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import instance from './utils';

export const getAllTickers = async () => (
  await instance.get('/tickers?symbols=ALL').then(res => (res.data))
)