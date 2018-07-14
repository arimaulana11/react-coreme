import {AsyncStorage} from 'react-native';
import {createStore, applyMiddleware, compose} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {persistStore, persistCombineReducers} from 'redux-persist';
import createHistory from 'history/createMemoryHistory';
import {Route} from 'react-router-native';
import {routerMiddleware} from 'react-router-redux';
import reducer from './reducers';

export const history = createHistory();

export default function configureStore() : any {
  const middleware = routerMiddleware(history);
  const enhancer = composeWithDevTools({})(applyMiddleware(thunk, middleware));
  const store = createStore(reducer, enhancer);
  let persistor = persistStore(store);

  if (module.hot) {
    module
      .hot
      .accept(() => {
        store.replaceReducer(require('./reducers').default);
      });
  }

  return {persistor, store}
}
