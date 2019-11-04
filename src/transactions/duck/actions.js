import types from './types'

const add = item => ({
	type: types.ADD_TRANSACTION, item
});

const remove = item => ({
	types: types.REMOVE_TRANSACTION, item
});


export default {
	add,
	remove
}
