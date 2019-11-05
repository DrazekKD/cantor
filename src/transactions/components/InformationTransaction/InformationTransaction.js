import React from 'react'
import ConvertValue from "../ConvertValue/ConvertValue";
import euroLogo from '../../../img/euro.svg'
import zlotyLogo from '../../../img/zloty.svg'
import './InformationTransaction.scss'

const InformationTransaction = (props) =>
	<div className="columns">

		{!!props.name && <div className="column information-name-container">{props.name}</div>}

		<div className="column">
			<div className="information-value-container">
				<ConvertValue
					amountEuro={props.amountEuro}/>
				<img src={euroLogo} alt="Euro" width={35} height={35}/>
			</div>
		</div>
		<div className="column">
			<div className="information-value-container">
				<ConvertValue
					amountEuro={props.amountEuro}
					exchangeRate={props.exchangeRate}/>
				<img src={zlotyLogo} alt="Pln" width={35} height={35}/>
			</div>
		</div>
	</div>;

export default InformationTransaction