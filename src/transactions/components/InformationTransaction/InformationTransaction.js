import React from 'react'
import ConvertValue from "../ConvertValue/ConvertValue";
import euroLogo from '../../../img/euro.svg'
import zlotyLogo from '../../../img/zloty.svg'
const InformationTransaction = (props) =>
	<div className="columns">
		{!!props.name && <div className="column">{props.name}</div>}
		<div className="column">
			<ConvertValue
				amountEuro={props.amountEuro}/>
			<img src={euroLogo} alt="" width={40} height={40}/>
		</div>
		<div className="column">
			<ConvertValue
				amountEuro={props.amountEuro}
				exchangeRate={props.exchangeRate}
			/>
			<img src={zlotyLogo} alt="" width={40} height={40}/>
		</div>
	</div>

export default InformationTransaction