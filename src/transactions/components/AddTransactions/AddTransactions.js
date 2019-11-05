import React, {useReducer} from 'react'
import {useDispatch} from 'react-redux';
import {default as transactionsType} from '../../duck/types';
import uniqid from "uniqid"
import euroLogo from '../../../img/euro.svg'
import './AddTransactions.scss'

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
		<article className="panel is-warning add-transaction-container">
			<p className="panel-heading">
				Add New Transaction
			</p>
			<div className="add-transaction-bar-container">
				<input
					className="input"
					type="text"
					name="nameTransactionInput"
					value={inputsContent.nameTransactionInput}
					placeholder="Transaction name"
					onChange={handleInputChange}/>
				<div className="add-transaction-euro-container">
					<input
						className="input"
						type="number"
						name="amountEuroTransactionInput"
						value={inputsContent.amountEuroTransactionInput}
						placeholder="amountEuroTransactionInput"
						onChange={handleInputChange}/>
					<img src={euroLogo} alt="" width={35} height={35}/>
				</div>

				<button
					className="button is-warning"
					onClick={addListItem}
					disabled={isDisabled}>
					Add Transaction
				</button>
			</div>
		</article>
	)
};

export default AddTransactions