import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';
import rootSagas from './sagas';

const sagaMiddlewares = createSagaMiddleware();
const devToolsMiddleware = window.__REDUX_DEVTOOLS_EXTENSION__();

const middlewares = applyMiddleware(sagaMiddlewares);

const store = createStore(
  rootReducer,
  compose(middlewares, devToolsMiddleware)
);

sagaMiddlewares.run(rootSagas);

export default store;
