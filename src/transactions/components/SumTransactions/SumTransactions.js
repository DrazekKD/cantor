import React from 'react'
import {useSelector} from "react-redux";
import InformationTransaction from "../InformationTransaction/InformationTransaction";
import './SumTransactions.scss'

const SumTransactions = () => {
	const transactions = useSelector(state => state.transactions.list);
	const exchangeRate = useSelector(state => state.transactions.exchangeRate);

	const sumEuroAllTransactions = transactions.reduce( (sum, transaction) => sum + transaction.amountEuro, 0);

	return (
		<div className="sum-container">
			<div>
				<article className="panel is-primary">
					<p className="panel-heading">
						Total Sum Transaction
					</p>
					<div className="panel-block is-flex sum-information-container">
						<InformationTransaction
							amountEuro={sumEuroAllTransactions}
							exchangeRate={exchangeRate}
						/>
					</div>
				</article>
			</div>
		</div>
	)
};

export default SumTransactions