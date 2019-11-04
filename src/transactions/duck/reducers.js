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
			name: 'Investment 1',
			amountEuro: 93.872
		},
		{
			id: 4,
			name: 'Investment 2',
			amountEuro: 91.875
		},
		{
			id: 5,
			name: 'Investment 3',
			amountEuro: 23.87
		},
		{
			id: 6,
			name: 'Investment 4',
			amountEuro: 9100.87
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