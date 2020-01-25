import * as ACTION_TYPES from '../constants/action-types';

export function userLoginSuccess() {
	return {
		type: ACTION_TYPES.USER_LOGIN_SUCCESS,
		payload: {}
	};
}

export function userRequestLogout() {
	return {
		type: ACTION_TYPES.USER_LOGOUT_REQUESTED,
		payload: {}
	};
}
