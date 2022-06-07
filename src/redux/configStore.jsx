import {combineReducers, createStore} from 'redux';
import {applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from './saga/rootSaga';
import {HistoryReducer} from './reducers/HistoryReducer'
import { UserLoginReducer } from './reducers/UserLoginReducer';


const sagaMiddleWare = createSagaMiddleware();

const rootReducer = combineReducers({
    //reducers
    HistoryReducer,
    UserLoginReducer,
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleWare));

sagaMiddleWare.run(rootSaga);
