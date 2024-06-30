import CryptoPriceDisplay from './components/CryptoPriceDisplay';
import CryptoSearchForm from './components/CryptoSearchForm';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <div className="container">
        <h1 className="app-title">
          Cotizador de <span>Criptomonedas</span>
        </h1>

        <main className="content">
          <CryptoSearchForm />
          <CryptoPriceDisplay />
        </main>
      </div>

      <Footer />
    </>
  );
}

export default App;
