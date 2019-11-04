import React from 'react'
import {useSelector} from "react-redux";


const TopTransactions = () => {
	const transactions = useSelector(state => state.transactions.list);
	const exchangeRate = useSelector(state => state.transactions.exchangeRate);

	const sortTransactions = transactions.sort((a, b) => (a.amountEuro < b.amountEuro) ? 1 : -1);
	const topFiveTransactions = sortTransactions.slice(0,5);
	return (
		<div>
			<article className="panel is-primary">
				<p className="panel-heading">
					Top 5 Transaction
				</p>
				{
					topFiveTransactions.map(transaction =>
						<div className="panel-block" key={transaction.id}>
							{transaction.name}
							{transaction.amountEuro}
							<br/>
							{Math.round((transaction.amountEuro * exchangeRate) * 100) / 100}
						</div>
					)
				}
			</article>
		</div>
	)
};

export default TopTransactions;