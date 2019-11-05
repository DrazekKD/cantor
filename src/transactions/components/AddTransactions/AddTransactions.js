import React, {useReducer} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {default as transactionsType} from '../../duck/types';
import uniqid from "uniqid"
const INITIAL_STATE = {
	id: 1,
	name: '',
	amountEuro: 1,
};

const AddTransactions = () => {
	const dispatch = useDispatch();

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
			id: uniqid(),
			name: inputsContent.nameTransactionInput,
			amountEuro: parseFloat(inputsContent.amountEuroTransactionInput)
		};

		dispatch({
			type: transactionsType.ADD_TRANSACTION,
			item: newTransaction
		})
	};

	const isDisabled = inputsContent.nameTransactionInput === '' || inputsContent.amountEuroTransactionInput <= 0;
	return(
		<div className="columns is-gapless">
			<div className="column">
				<input
					className="input"
					type="text"
					name="nameTransactionInput"
					value={inputsContent.nameTransactionInput}
					placeholder="Transaction name"
					onChange={handleInputChange}/>
			</div>
			<div className="column">
				<input
					className="input"
					type="number"
					name="amountEuroTransactionInput"
					value={inputsContent.amountEuroTransactionInput}
					placeholder="amountEuroTransactionInput"
					onChange={handleInputChange}/>
			</div>
			<div className="column is-offset-1">
				<button
					className="button"
					onClick={addListItem}
					disabled={isDisabled}>
					Add Transaction
				</button>
			</div>
		</div>
	)
};

export default AddTransactions