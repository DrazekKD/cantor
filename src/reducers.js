import { combineReducers } from 'redux'
import transactionsReducer from './transactions/duck'

const rootReducer = combineReducers({
	transactions: transactionsReducer
});

export default rootReducer;