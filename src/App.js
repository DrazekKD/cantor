import React from 'react';
import './App.scss';
import ListTransactions from "./transactions/components/ListTransactions/ListTransactions";
import AddTransactions from "./transactions/components/AddTransactions/AddTransactions";
import ExchangeRate from "./transactions/components/ExchangeRate/ExchangeRate";
import TopTransactions from "./transactions/components/TopTransactions/TopTransactions";
import SumTransactions from "./transactions/components/SumTransactions/SumTransactions";

function App() {
  return (
      <div className="app">
		  <div className="columns is-centered is-variable is-8-widescreen">
			  <div className="column is-two-fifths">
				  <ExchangeRate/>
				  <ListTransactions/>
				  <AddTransactions/>
			  </div>
			  <div className="column is-one-third">
				  <SumTransactions/>
				  <TopTransactions/>
			  </div>
		  </div>
      </div>
  );
}

export default App;
