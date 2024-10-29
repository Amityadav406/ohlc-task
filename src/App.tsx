import React from 'react';
import './App.css';

const OrderBook = React.lazy(() => import('./container/orderBook'));
const Chats = React.lazy(() => import('./container/chats'))

const App = () => {
  return (
    <React.Suspense fallback={<p>...loading</p>}>
      <Chats />
      <OrderBook />
    </React.Suspense>
  );
}

export default App;
