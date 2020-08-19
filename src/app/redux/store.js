import { applyMiddleware, createStore } from 'redux';
import reduxLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from './reducers';
import rootSaga from './sagas';

export const createWeatherStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = applyMiddleware(
    sagaMiddleware,
    reduxLogger,
  );

  const store = createStore(rootReducer, middlewares);

  sagaMiddleware.run(rootSaga);

  return store;
};
