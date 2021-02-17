
import './App.css';
import {Provider} from 'react-redux' 
import CakeShop from './CakeShop'
import {Store} from './redux/cakeStore'
import CakeshopWithHooks from './CakeshopWithHooks'
function App() {
  return (
    <Provider store={Store}>
    <div className="App">
      <CakeshopWithHooks></CakeshopWithHooks>
      <CakeShop></CakeShop>
    </div>
    </Provider>
  );
}

export default App;
