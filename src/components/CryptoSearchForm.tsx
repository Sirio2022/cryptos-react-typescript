import { useId } from 'react';
import { useCompare } from '../hooks/useCompare';
import { currencies } from '../data';
import { useCryptoStore } from '../store';
import ErrorMessage from './ErrorMessage';

export default function CryptoSearchForm() {
  const { register, handleSubmit, cryptoCompareResult, errors } = useCompare();
  const cryptoList = useCryptoStore((state) => state.cryptoList);

  const currency = useId();
  const crypto = useId();

  return (
    <form className="form" onSubmit={handleSubmit(cryptoCompareResult)}>
      <div className="field">
        <label htmlFor={currency}>Elige tu Moneda</label>
        <select
          id={currency}
          {...register('currency', {
            required: 'Debes seleccionar una moneda',
          })}
        >
          <option value="">-- Elige tu moneda --</option>
          {currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>
              {currency.name}
            </option>
          ))}
        </select>
        {errors.currency && (
          <ErrorMessage>{errors.currency.message}</ErrorMessage>
        )}
      </div>

      <div className="field">
        <label htmlFor={crypto}>Elige tu Criptomoneda</label>
        <select
          id={crypto}
          {...register('crypto', {
            required: 'Debes seleccionar una criptomoneda',
          })}
        >
          <option value="">-- Elige tu criptomoneda --</option>
          {cryptoList.map((item) =>
            item.map((crypto) => (
              <option key={crypto.CoinInfo.Name} value={crypto.CoinInfo.Name}>
                {crypto.CoinInfo.FullName}
              </option>
            ))
          )}
        </select>
        {errors.crypto && <ErrorMessage>{errors.crypto.message}</ErrorMessage>}
      </div>

      <input
        type="submit"
        value="Calcular"
        disabled={Object.keys(errors).length > 0}
      />
    </form>
  );
}
