//import logo from './logo.svg';
import Item from './components/Item';
import Checkout from './components/Checkout';
import './App.css';

function App() {
  return (
    <div className='app-container'>
        <div className='row'>
          <div className='col'>
            <Item name={"Instax Mini 90 Neo Classic"} price={"$144.99"} img={"http://ecx.images-amazon.com/images/I/61%2BABMMN5zL._SL1500_.jpg"}/>
          </div>
          <div className='col no-gutters'>
            <Checkout />
          </div>
        </div>
      </div>
  );
}

export default App;
