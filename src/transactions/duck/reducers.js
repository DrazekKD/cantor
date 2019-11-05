import types from './types'


const INITIAL_STATE = {
	idGenerator:8,
	exchangeRate: 4.43,
	list: [
		{
			id: 1,
			name: 'For Holiday',
			amountEuro: 30.1
		},
		{
			id: 2,
			name: 'For Party',
			amountEuro: 19.4
		},
		{
			id: 3,
			name: 'Investment',
			amountEuro: 93.82
		},
		{
			id: 4,
			name: 'For Birthday',
			amountEuro: 91.87
		},


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