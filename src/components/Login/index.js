//import liraries
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Animated,
  StatusBar
} from 'react-native';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import styles from './styles';

const springValue = new Animated.Value(0.3);

const SpringAnimateLogo = () : any => {
  Animated.spring(springValue, {
    toValue: 1,
    friction: 1
  }).start()
}

const Login = (props) : Component => {
  // Init spring animation
  SpringAnimateLogo();

  return (
    <KeyboardAvoidingView style={ styles.container }>
      <StatusBar
        translucent={ true }
        backgroundColor='rgba(255, 255, 255, .2)'
        barStyle="dark-content"/>
      <View style={ styles.loginContainer }>
        <Animated.Image
          resizeMode="contain"
          style={{
            position: 'absolute',
            width: 300,
            height: 150,
            transform: [{ scale: springValue }]
          }}
          source={ require('../images/logo-dark-bg.png') }/>
      </View>
      <View>
        <LoginForm/>
      </View>
    </KeyboardAvoidingView>
  )
};

export default Login;
