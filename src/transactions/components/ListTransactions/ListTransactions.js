import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {default as transactionsType} from '../../duck/types';

import ConvertValue from '../ConvertValue/ConvertValue';

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
					className="delete"
					onClick={()=>removeTransaction(transaction.id)}>
				</button>
				{transaction.name}
				<ConvertValue
					amountEuro={transaction.amountEuro}
					exchangeRate={exchangeRate}
				/>
			</div>
		)}
	</div>;

};


export default ListTransactions