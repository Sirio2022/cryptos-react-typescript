import { InferInput } from 'valibot';
import {
  CrytoSchema,
  CurrencySchema,
  CryptoCompareSchema,
  CryptoCompareResultSchema,
} from '../schemas/crypto-schema';

export type CurrencyType = InferInput<typeof CurrencySchema>;

export type CryptoType = InferInput<typeof CrytoSchema>;

export type CryptoCompareType = InferInput<typeof CryptoCompareSchema>;

export type CryptoCompareResultType = InferInput<
  typeof CryptoCompareResultSchema
>;
