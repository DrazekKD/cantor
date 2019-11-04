import React from 'react'
import { useSelector } from 'react-redux'

const ListTransactions = () => {

	const transactions = useSelector(state => state.transactions.list);
	const exchangeRate = useSelector(state => state.transactions.exchangeRate);
	return	<ul>
		{transactions.map(transaction =>
			<li key={transaction.id}>
				{transaction.name}
				{Math.round((transaction.amountEuro * exchangeRate) * 100) / 100}
			</li>
		)}
	</ul>;

};


export default ListTransactions