import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { AsyncStorage } from 'react-native';
import { createLogger } from 'redux-logger';
import { persistStore, autoRehydrate } from 'redux-persist';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const configureStore = (initialState) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  const store = compose(
    autoRehydrate(),
    applyMiddleware(...middlewares),
  )(createStore)(rootReducer, initialState);

  sagaMiddleware.run(rootSaga);
  persistStore(store, {
    storage: AsyncStorage,
    whitelist: ['user', 'auth'],
  });

  return store;
};

export default configureStore;
