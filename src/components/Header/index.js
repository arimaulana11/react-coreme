//import liraries
import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import styles from './styles';

type PropTypes = {
  backgroundColor: String,
  leftContent: Component,
  rightContent: Component,
  lrSize: Integer,
  caption: String
};

// create a component
const Header = (props: Object): Component<PropTypes> => {
  return (
    <View style={styles.navBar}>
      <View style={[styles.navBarButton, {width: props.lrSize}]}>
        {props.leftContent}
      </View>
      <View style={styles.navBarHeader}>
        {props.caption && (
          <Text style={styles.navBarHeader}>{props.caption}</Text>
        )}
      </View>
      <View style={[styles.navBarButton, {width: props.lrSize}]}>
        {props.rightContent}
      </View>
    </View>
  );
}

export default Header;
