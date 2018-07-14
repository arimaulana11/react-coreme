import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-native';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createMemoryHistory';
import configureStore, { history } from './src/configureStore';
import { PersistGate } from 'redux-persist/lib/integration/react'
import Loading from './src/components/Loading';
import PrivateRoute from './src/components/PrivateRoute';
import Welcome from './src/components/Welcome';
import Login from './src/components/Login';
import Home from './src/components/Home';
import Absensis from './src/components/Absensis';

const store: Object = configureStore().store;
const persistor: Object = configureStore().persistor;

const App = (): Component => <Provider store={store}>
  <PersistGate loading={<Loading />} persistor={persistor}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exac path="/welcome" component={Welcome} />
        <Route exac path="/login" component={Login} />
        <PrivateRoute path="/" component={Absensis} />
      </Switch>
    </ConnectedRouter>
  </PersistGate>
</Provider>

export default App;
