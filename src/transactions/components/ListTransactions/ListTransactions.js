import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {default as transactionsType} from '../../duck/types';

import InformationTransaction from '../InformationTransaction/InformationTransaction';

const ListTransactions = () => {

	const dispatch = useDispatch();
	const transactions = useSelector(state => state.transactions.list);
	const exchangeRate = useSelector(state => state.transactions.exchangeRate);

	const removeTransaction = (id) => {
		dispatch({type:transactionsType.REMOVE_TRANSACTION, item:id})
	};

	return	<div>
		{transactions.map(transaction =>
			<div key={transaction.id} className="notification is-primary">
				<button
					className="delete is-warning"
					onClick={()=>removeTransaction(transaction.id)}>
				</button>
				<InformationTransaction
					name={transaction.name}
					amountEuro={transaction.amountEuro}
					exchangeRate={exchangeRate}
				/>
			</div>
		)}
	</div>;

};


export default ListTransactions