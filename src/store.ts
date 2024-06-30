import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { CryptoCompareResultType, CryptoType } from './types';

type CryptoStore = {
  cryptoList: CryptoType[];
  setCryptoList: (cryptoList: CryptoType) => void;
  cryptoCompareResult: CryptoCompareResultType;
  setCryptoCompareResult: (
    cryptoCompareResult: CryptoCompareResultType
  ) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
};

const initialState = {
  cryptoList: [],
  cryptoCompareResult: {} as CryptoCompareResultType,
  loading: false,
};

export const useCryptoStore = create<CryptoStore>()(
  devtools((set) => ({
    ...initialState,

    setCryptoList: (cryptoList) =>
      set(() => ({
        cryptoList: [cryptoList],
      })),
    setCryptoCompareResult: (cryptoCompareResult) => {
      set(() => ({
        cryptoCompareResult: cryptoCompareResult,
      }));
    },
    setLoading: (loading) => set(() => ({ loading })),
  }))
);
