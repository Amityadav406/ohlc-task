import React from 'react';
import './App.css';
import Chats from './components/chats';
import { OrderBook } from './components/orderBook';

const App = () => {
  return (
    <React.Fragment>
      <Chats />
      <OrderBook />
    </React.Fragment>
  );
}

export default App;
