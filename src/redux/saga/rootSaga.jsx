import {all } from 'redux-saga/effects';
import * as manageSagaActions from './manageSagaActions';
export function *rootSaga(){
    yield all([
        manageSagaActions.followSignInSaga(),
    ]);
};