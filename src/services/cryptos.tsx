import axios from 'axios';

export async function fetchCryptos() {
  const cryptos = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD`;
  try {
    const {
      data: { Data },
    } = await axios.get(cryptos);
    return Data;
  } catch (error) {
    console.log(error);
  }
}
