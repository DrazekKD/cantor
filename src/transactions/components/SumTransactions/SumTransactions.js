import React from 'react'
import {useSelector} from "react-redux";
import ConvertValue from "../ConvertValue/ConvertValue";
import InformationTransaction from "../InformationTransaction/InformationTransaction";
import './SumTransactions.scss'
import euroLogo from '../../../img/euro.svg'
import zlotyLogo from '../../../img/zloty.svg'

const SumTransactions = () => {
	const transactions = useSelector(state => state.transactions.list);
	const exchangeRate = useSelector(state => state.transactions.exchangeRate);

	const sumEuroAllTransactions = transactions.reduce( (sum, transaction) => sum + transaction.amountEuro, 0);
	return (
		<div className="sumContainer">
			<div>
				<article className="panel is-warning">
					<p className="panel-heading">
						Total Sum Transaction
					</p>
					<div className="panel-block is-flex">
						<InformationTransaction
							amountEuro={sumEuroAllTransactions}
							exchangeRate={exchangeRate}
						/>
						{/*<div>*/}
						{/*	<ConvertValue*/}
						{/*		amountEuro={sumEuroAllTransactions}/>*/}
						{/*	<img src={euroLogo} alt="" width={40} height={40}/>*/}
						{/*</div>*/}
						{/*<div>*/}
						{/*	<ConvertValue*/}
						{/*		amountEuro={sumEuroAllTransactions}*/}
						{/*		exchangeRate={exchangeRate}*/}
						{/*	/>*/}
						{/*	<img src={zlotyLogo} alt=""  width={40} height={40}/>*/}
						{/*</div>*/}
					</div>
				</article>
			</div>
		</div>
	)
};

export default SumTransactions