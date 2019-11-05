import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {default as transactionsType} from '../../duck/types';
import "./ExchangeRate.scss";

const ExchangeRate = () => {
	const dispatch = useDispatch();
	const exchangeRate = useSelector(state => state.transactions.exchangeRate);
	const [inputContent, setInputContent] = useState(exchangeRate);

	const handleInputChange = e => setInputContent(e.target.value);

	const changeExchangeRate = () => dispatch({type:transactionsType.CHANGE_EXCHANGE_RATE, item:inputContent});

	return (
		<div className="columns">
			<div className="column">
				<input
					className="input"
					type="number"
					name="amountEuroTransactionInput"
					value={inputContent}
					placeholder="amountEuroTransactionInput"
					onChange={handleInputChange}/>
			</div>
			<div className="column">
				<button
					className="button is-warning"
					onClick={changeExchangeRate}>
					Change Exchange Rate
				</button>
			</div>
		</div>
	)
};

export default ExchangeRate;