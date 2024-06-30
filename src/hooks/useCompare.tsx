import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { object, parse, string, array } from 'valibot';
import { fetchCryptos } from '../services/cryptos';
import { useCryptoStore } from '../store';
import { CryptoCompareType } from '../types';
import { cryptoCompare } from '../services/compare';

export function useCompare() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CryptoCompareType>();
  const setCryptoList = useCryptoStore((state) => state.setCryptoList);
  const setCryptoCompareResult = useCryptoStore(
    (state) => state.setCryptoCompareResult
  );
  const setLoading = useCryptoStore((state) => state.setLoading);

  useEffect(() => {
    const cryptos = async () => {
      try {
        const response = await fetchCryptos();

        if (!response || typeof response !== 'object') {
          console.error('Respuesta inválida:', response);
          return; // Salir si la respuesta no es válida
        }

        const CryptoSchema = array(
          object({
            CoinInfo: object({
              Name: string(),
              FullName: string(),
            }),
          })
        );

        const result = parse(CryptoSchema, response);
        setCryptoList(result);
      } catch (error) {
        console.error('Error al obtener los cryptos:', error);
      }
    };

    cryptos();
  }, [setCryptoList]);

  const cryptoCompareResult = useCallback(
    async (data: CryptoCompareType) => {
      setLoading(true);
      const response = await cryptoCompare(data);

      const CryptoCompareSchema = object({
        IMAGEURL: string(),
        PRICE: string(),
        HIGHDAY: string(),
        LOWDAY: string(),
        CHANGEPCT24HOUR: string(),
        LASTUPDATE: string(),
      });
      const result = parse(
        CryptoCompareSchema,
        response[data.crypto][data.currency]
      );
      setCryptoCompareResult(result);
      setLoading(false);

      reset();
    },
    [reset, setCryptoCompareResult, setLoading]
  );

  return {
    register,
    handleSubmit,
    reset,
    errors,
    cryptoCompareResult,
  };
}
