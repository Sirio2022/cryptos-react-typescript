import { object, string, array } from 'valibot';

export const CurrencySchema = object({
  code: string(),
  name: string(),
});

export const CrytoSchema = array(
  object({
    CoinInfo: object({
      Name: string(),
      FullName: string(),
    }),
  })
);

export const CryptoCompareSchema = object({
  currency: string(),
  crypto: string(),
});

export const CryptoCompareResultSchema = object({
  IMAGEURL: string(),
  PRICE: string(),
  HIGHDAY: string(),
  LOWDAY: string(),
  CHANGEPCT24HOUR: string(),
  LASTUPDATE: string(),
});
