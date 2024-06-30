import axios from 'axios';
import { CryptoCompareType } from '../types';

export async function cryptoCompare(data: CryptoCompareType) {
  const cryptos = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${data.crypto}&tsyms=${data.currency}`;
  try {
    const {
      data: { DISPLAY },
    } = await axios.get(cryptos);
    return DISPLAY;
  } catch (error) {
    console.log(error);
  }
}
