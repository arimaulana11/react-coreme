//import liraries
import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import { connect } from 'react-redux';
import Container from '../Container';
import Header from '../Header';

// create a component
const Home = (props: Object): Component => {
  return (
    <Container>
      <Header />
    </Container>
  );
}

export default Home
