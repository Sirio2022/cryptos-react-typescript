import { useMemo } from 'react';
import { useCryptoStore } from '../store';
import Spinner from './spinner/Spinner';

export default function CryptoPriceDisplay() {
  const cryptoCompareResult = useCryptoStore(
    (state) => state.cryptoCompareResult
  );
  const hasValues = useMemo(
    () => Object.keys(cryptoCompareResult).length > 0,
    [cryptoCompareResult]
  );

  const loading = useCryptoStore((state) => state.loading);

  return (
    <div className="result-wrapper">
      {loading ? (
        <Spinner />
      ) : (
        hasValues && (
          <>
            <h2>Cotización</h2>

            <div className="result">
              <img
                src={`https://cryptocompare.com/${cryptoCompareResult.IMAGEURL}`}
                alt="Imagen CryptoMoneda"
              />
              <div>
                <p>
                  El precio es: <span>{cryptoCompareResult.PRICE}</span>
                </p>
                <p>
                  Precio más alto del día:{' '}
                  <span>{cryptoCompareResult.HIGHDAY}</span>
                </p>
                <p>
                  Precio más bajo del día:{' '}
                  <span>{cryptoCompareResult.LOWDAY}</span>
                </p>
                <p>
                  Variación últimas 24 horas:{' '}
                  <span>{cryptoCompareResult.CHANGEPCT24HOUR}</span>
                </p>
                <p>
                  Última actualización:{' '}
                  <span>{cryptoCompareResult.LASTUPDATE}</span>
                </p>
              </div>
            </div>
          </>
        )
      )}
    </div>
  );
}
