import * as ACTION_TYPES from '../constants/action-types';

const initialState = {
	isAuthenticated: false,
	error: undefined,
	isFailed: false
};

export default (state = initialState, action) => {
	const { type, payload, error } = action;

	switch (type) {
		case ACTION_TYPES.USER_LOGIN_SUCCESS:
			return {
				...state,
				isAuthenticated: true,
				isFailed: false
			};
		case ACTION_TYPES.USER_LOGOUT_REQUESTED:
			return {
				...initialState
			};
		default:
			return state;
	}
};
