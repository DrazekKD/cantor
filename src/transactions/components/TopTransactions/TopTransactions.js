import React from 'react'
import {useSelector} from "react-redux";
import InformationTransaction from "../InformationTransaction/InformationTransaction";
import './TopTransactions.scss'

const TopTransactions = () => {
	const transactions = useSelector(state => state.transactions.list);
	const exchangeRate = useSelector(state => state.transactions.exchangeRate);

	const sortTransactions = transactions.sort((a, b) => (a.amountEuro < b.amountEuro) ? 1 : -1);
	const topFiveTransactions = sortTransactions.slice(0,5);
	return (
		<di>
			<article className="panel is-primary">
				<p className="panel-heading">
					Top 5 Transaction
				</p>
				<div className="top-transactions-list">
					{
						topFiveTransactions.map(transaction =>
							<div key={transaction.id}>
								<InformationTransaction
									name={transaction.name}
									amountEuro={transaction.amountEuro}
									exchangeRate={exchangeRate}
								/>
							</div>
						)
					}
				</div>
			</article>
		</di>
	)
};

export default TopTransactions;