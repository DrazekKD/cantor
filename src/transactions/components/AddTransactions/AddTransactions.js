import React, {useReducer} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {default as transactionsType} from '../../duck/types';

const INITIAL_STATE = {
	id: 1,
	name: '',
	amountEuro: 0,
};

const AddTransactions = () => {
	const dispatch = useDispatch();
	const transactions = useSelector(state => state.transactions.list);
	const [inputsContent, setInputContent] = useReducer(
		(state,newState)=>({...state, ...newState}),
		{
			nameTransactionInput: INITIAL_STATE.name,
			amountEuroTransactionInput: INITIAL_STATE.amountEuro
		}
	);

	const handleInputChange = e => setInputContent({[e.target.name]:e.target.value});

	const addListItem = () => {
		const newTransaction = {
			id: transactions.length + 1,
			name: inputsContent.nameTransactionInput,
			amountEuro: inputsContent.amountEuroTransactionInput
		};

		dispatch({
			type: transactionsType.ADD_TRANSACTION,
			item: newTransaction
		})
	};
	return(
		<div>
			<input
				type="text"
				name="nameTransactionInput"
				value={inputsContent.nameTransactionInput}
				placeholder="Transaction name"
				onChange={handleInputChange}/>
			<input
				type="number"
				name="amountEuroTransactionInput"
				value={inputsContent.amountEuroTransactionInput}
				placeholder="amountEuroTransactionInput"
				onChange={handleInputChange}/>
			<button
				className="button is-warning"
				onClick={addListItem}>
				Add Task
			</button>
		</div>
	)
};

export default AddTransactions