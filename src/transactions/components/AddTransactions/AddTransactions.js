import React, {useReducer} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {default as transactionsType} from '../../duck/types';

const INITIAL_STATE = {
	id: 1,
	name: '',
	amountEuro: 1,
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

	const isDisabled = inputsContent.nameTransactionInput === '' || inputsContent.amountEuroTransactionInput <= 0;
	return(
		<div className="columns">
			<input
				className="column is-one-fifth input"
				type="text"
				name="nameTransactionInput"
				value={inputsContent.nameTransactionInput}
				placeholder="Transaction name"
				onChange={handleInputChange}/>
			<input
				className="column is-one-fifth input"
				type="number"
				name="amountEuroTransactionInput"
				value={inputsContent.amountEuroTransactionInput}
				placeholder="amountEuroTransactionInput"
				onChange={handleInputChange}/>
			<button
				className="column is-one-fifth  button"
				onClick={addListItem}
				disabled={isDisabled}>
				Add Transaction
			</button>
		</div>
	)
};

export default AddTransactions