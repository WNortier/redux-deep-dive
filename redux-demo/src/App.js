import './App.css';
import CakeContainer from './components/cakeContainer';
// import CakeContainer from './components/cakeContainer';
import store from './redux/store'
import { Provider } from 'react-redux'

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
