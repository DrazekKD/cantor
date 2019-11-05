import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux';
import {default as transactionsType} from '../../duck/types';
import euroLogo from '../../../img/euro.svg'
import zlotyLogo from '../../../img/zloty.svg'
import "./ExchangeRate.scss";

const ExchangeRate = () => {
	const dispatch = useDispatch();
	const exchangeRate = useSelector(state => state.transactions.exchangeRate);
	const [inputContent, setInputContent] = useState(exchangeRate);

	const handleInputChange = e => setInputContent(e.target.value);

	const changeExchangeRate = () => dispatch({type:transactionsType.CHANGE_EXCHANGE_RATE, item:inputContent});

	return (
		<article className="panel is-warning">
			<p className="panel-heading">
				Change The PLN Exchange Rate
			</p>
			<div className="exchange-rate-bar-container">
				<div className="exchange-rate-container">
					<div className="exchange-rate-euro-container">
						<span>1</span>
						<img src={euroLogo} alt="" width={35} height={35}/>
						<span>=</span>
					</div>
					<div className="exchange-rate-input-container">
						<input
							className="input"
							type="number"
							name="amountEuroTransactionInput"
							value={inputContent}
							placeholder="amountEuroTransactionInput"
							onChange={handleInputChange}/>
						<img src={zlotyLogo} alt="" width={35} height={35}/>
					</div>
				</div>
				<button
					className="button is-warning"
					onClick={changeExchangeRate}>
					Change
				</button>
			</div>
	</article>
	)
};

export default ExchangeRate;