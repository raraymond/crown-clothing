import { all, call, takeLatest, put } from 'redux-saga/effects';

import UserActionTypes from '../user/user.types';
import { clearCart } from './cart.actions';

export function* clearCartOnSignOut () {
	yield put(clearCart());
}

//listener for on sign out success type
export function* onSignOutSuccess () {
	yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export function* cartSagas () {
	yield all([
		call(onSignOutSuccess),
	]);
}
