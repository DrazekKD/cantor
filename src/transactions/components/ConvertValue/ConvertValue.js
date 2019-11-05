const ConvertValue = (props) => Math.round((props.amountEuro * props.exchangeRate) * 100) / 100;

export default ConvertValue;