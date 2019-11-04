import React from 'react';
import './App.css';
import ListTransactions from "./transactions/components/ListTransactions/ListTransactions";
import AddTransactions from "./transactions/components/AddTransactions/AddTransactions";
import ExchangeRate from "./transactions/components/ExchangeRate/ExchangeRate";
import TopTransactions from "./transactions/components/TopTransactions/TopTransactions";

function App() {
  return (
      <div className="columns">
          <div className="column is-three-fifths">
			  <ExchangeRate/>
			  <ListTransactions/>
			  <AddTransactions/>
          </div>
          <div className="column is-one-third">
              <TopTransactions/>
          </div>
      </div>
  );
}

export default App;
