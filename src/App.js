import React from 'react';
import './App.css';
import ListTransactions from "./transactions/components/ListTransactions/ListTransactions";
import AddTransactions from "./transactions/components/AddTransactions/AddTransactions";
import ExchangeRate from "./transactions/components/ExchangeRate/ExchangeRate";

function App() {
  return (
      <div>
          <ExchangeRate/>
        <ListTransactions/>
          <AddTransactions/>
      </div>
  );
}

export default App;
