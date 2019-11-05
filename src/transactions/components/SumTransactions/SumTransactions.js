import React from 'react'
import {useSelector} from "react-redux";
import ConvertValue from "../ConvertValue/ConvertValue";

const SumTransactions = () => {
	const transactions = useSelector(state => state.transactions.list);
	const exchangeRate = useSelector(state => state.transactions.exchangeRate);

	const sumEuroAllTransactions = transactions.reduce( (sum, transaction) => sum + transaction.amountEuro, 0);
	return (
		<div className="sumContainer">
			<p>Total Transaction Sum</p>
			<div>
				<div>
					<span>EURO </span>
					{sumEuroAllTransactions}
				</div>
				<div>
					<span>PLN </span>
					{ Math.round((sumEuroAllTransactions * exchangeRate) * 100) / 100}
				</div>
			</div>
		</div>
	)
};

export default SumTransactions