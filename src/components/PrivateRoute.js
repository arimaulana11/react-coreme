import React, { Component } from 'react';
import { Redirect } from 'react-router-native';
import { connect } from 'react-redux';
import { Route } from 'react-router-native';

class PrivateRouteContainer extends Component {
  render() {
    const {
      isAuthenticated,
      component: Component,
      ...props
    } = this.props

    return (
      <Route
        {...props}
        render={props =>
          isAuthenticated
            ? <Component {...props} />
            : (
            <Redirect to={{
              pathname: '/welcome',
              state: { from: props.location }
            }} />
          )
        }
      />
    )
  }
}

const PrivateRoute = connect(state => ({
  isAuthenticated: !state.userdata.error
}))(PrivateRouteContainer)

export default PrivateRoute;
