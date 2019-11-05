import React from 'react'
import ConvertValue from "../ConvertValue/ConvertValue";

const InformationTransaction = (props) =>
	<div className="columns">
		<div className="column">{props.name}</div>
		<div className="column">EURO:
			<ConvertValue
				amountEuro={props.amountEuro}/>
		</div>
		<div className="column">
			PLN:
			<ConvertValue
				amountEuro={props.amountEuro}
				exchangeRate={props.exchangeRate}
			/>
		</div>
	</div>

export default InformationTransaction