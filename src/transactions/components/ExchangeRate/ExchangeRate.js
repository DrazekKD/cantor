import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {default as transactionsType} from '../../duck/types';

const ExchangeRate = () => {
	const dispatch = useDispatch();
	const exchangeRate = useSelector(state => state.transactions.exchangeRate);
	const [inputContent, setInputContent] = useState(exchangeRate);

	const handleInputChange = e => setInputContent(e.target.value);

	const changeExchangeRate = () => dispatch({type:transactionsType.CHANGE_EXCHANGE_RATE, item:inputContent});

	return (
		<div>
			<input
				type="number"
				name="amountEuroTransactionInput"
				value={inputContent}
				placeholder="amountEuroTransactionInput"
				onChange={handleInputChange}/>
			<button
				className="button"
				onClick={changeExchangeRate}
			>
				Change Exchange Rate
			</button>
		</div>
	)
};

export default ExchangeRate;