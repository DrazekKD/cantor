import React from 'react'
const ConvertValue = (props) =>
	<div>
		{Math.round((props.amountEuro * (!props.exchangeRate ? 1 : props.exchangeRate) ) * 100) / 100}
	</div>;

export default ConvertValue;