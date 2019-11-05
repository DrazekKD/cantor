import React from 'react'
import {useSelector} from "react-redux";

const SumTransactions = () => {
	const transactions = useSelector(state => state.transactions.list);
	const sumEuroAllTransactions = transactions.reduce( (sum, transaction) => sum + transaction.amountEuro, 0);
	return (
		<div>

			{sumEuroAllTransactions}
		</div>
	)
};

export default SumTransactions