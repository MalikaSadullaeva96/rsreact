import '../src/App.css';
import { Provider } from 'react-redux';
import { store } from '../src/store/store';
import '../src/components/PokemonInfo/Pokemons.css';
import "../src/components/display/DisplayPokemon.css";
import "../src/components/input/Input.css";
import "../src/components/pagination/Pagination.css";
import "../styles/global.css"

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
