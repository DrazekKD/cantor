import types from './types'


const INITIAL_STATE = {
	exchangeRate: 4.43,
	list: [
		{
			id: 1,
			name: 'On Holiday',
			amountEuro: 30
		},
		{
			id: 2,
			name: 'On Party',
			amountEuro: 19.4
		},
		{
			id: 3,
			name: 'Investment',
			amountEuro: 9.872
		}
	]
};


const transactionsReducer = ( state = INITIAL_STATE, action) => {
	
	switch (action.type) {
		case types.ADD_TRANSACTION:
			return {
				...state, list: [...state.list, action.item]
			};
		case types.REMOVE_TRANSACTION:
			return {
				...state, list: [...state.list.filter(item => item.id !== action.item)]
			};
		case types.CHANGE_EXCHANGE_RATE:
			return {
				...state, exchangeRate: action.item
			};
		default:
			return state
	}
};


export default transactionsReducer