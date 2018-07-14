//import liraries
import React, { Component } from 'react';
import {
  View,
  Text,
  StatusBar
} from 'react-native';
import styles from './styles';

type PropTypes = {
  backgroundColor: String
}

// create a component
const Container = (props: Object): Component<PropTypes> => {
  return (
    <View style={[styles.container, {backgroundColor: props.backgroundColor}]}>
      <StatusBar
        translucent={ true }
        backgroundColor='rgba(255, 255, 255, .2)'
        barStyle="dark-content"/>
      {props.children}
    </View>);
}

export default Container;
