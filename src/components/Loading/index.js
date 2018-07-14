import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Spinner from 'react-native-spinkit';
import styles from './styles';

const Loading = () : Component => <View style={styles.container}>
  <Spinner color="#ffffff" style={styles.loadingContainer} type={'Pulse'}/>
</View>;

export default Loading;
