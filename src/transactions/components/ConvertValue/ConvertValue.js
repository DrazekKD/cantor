import React from 'react'
import PropTypes from 'prop-types';

const ConvertValue = (props) =>
	<div>
		{Math.round((props.amountEuro * (!props.exchangeRate ? 1 : props.exchangeRate) ) * 100) / 100}
	</div>;

export default ConvertValue;

ConvertValue.propTypes = {
	amountEuro: PropTypes.number,
	exchangeRate: PropTypes.number
};