import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

type PropTypes = {
  onPress: Function,
	caption: String,
	style: Object,
	color: String
}

const Button = (props: Object) : Component<PropTypes> => {
	return (
		<TouchableOpacity style={[styles.buttonContainer, props.style]} onPress={props.onPress}>
			<Text style={[styles.buttonText, {color: props.color}]}>{props.caption}</Text>
		</TouchableOpacity>
	);
}

export default Button;