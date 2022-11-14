import { useParams } from "react-router";
import Item from './components/Item';
import Checkout from './components/Checkout';
import data from './data/concerts'

import './App.css';

const App = () => {

  const params = useParams();

  return (
    <div className='app-container'>
      <div className='row'>
        <div className='col'>
          <Item data={data} id={params.title} name={"Canon EOS kit 4000D"} price={"$2.126.719"} img={"https://cdn.shopify.com/s/files/1/0495/8883/0360/products/m506_large.jpg?v=1651612812"} />
        </div>
        <div className='col no-gutters'>
          <Checkout />
        </div>
      </div>
    </div>
  );
}

export default App;
