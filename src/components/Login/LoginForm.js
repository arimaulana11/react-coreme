//import liraries
import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  ToastAndroid,
  Animated,
  ActivityIndicator,
  Dimensions
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-native';
import { push } from 'react-router-redux';
import styles from './styles';
import { loginAction, loginfield, userdata } from '../../actions/login';
import { ButtonAnimate } from '../Button';

const { width, height } = Dimensions.get('window');
const buttonWidth = width - 40;

// create a component
const LoginForm = (props: Object): Component => {

  const self = this;

  const onButtonLogin = (): any => {
    props.loginAction(
      props.field.username,
      props.field.password,
      (result) => {
        console.log(props);
        if (result.error) {
          ToastAndroid.show(result.messages[0], ToastAndroid.LONG);
          self.bLogin.error();
          props.userdata({});
        } else {
          self.bLogin.success();
          props.toHome();
        }
      }
    );
  };

  return (
    <View style={styles.containerForm}>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        onChangeText={(username) => props.loginfield({ username: username })}
        onSubmitEditing={() => this.passwordInput.focus()}
        autoCorrect={false}
        keyboardType='email-address'
        returnKeyType="next"
        placeholder='Masukan Username'
        underlineColorAndroid='transparent'
        placeholderTextColor='#ccc' />

      <TextInput
        style={styles.input}
        returnKeyType="go"
        onChangeText={(password) => props.loginfield({ password: password })}
        placeholder='Masukan Kata Sandi'
        underlineColorAndroid='transparent'
        placeholderTextColor='#ccc'
        secureTextEntry />

      <View style={styles.buttonCenter}>
        <ButtonAnimate
          bounce
          ref={ref => (this.bLogin = ref)}
          foregroundColor={'#f90'}
          backgroundColor={'#f90'}
          label="LOGIN"
          onPress={() => onButtonLogin()}
          onSecondaryPress={() => this.bLogin.reset()}
          renderIndicator={<ActivityIndicator color={'#ffffff'} />}
          maxWidth={buttonWidth}
          minWidth={50}
          labelStyle={{ color: '#ffffff' }}
          style={{ marginTop: 0, height: 45 }}
          successIconName="check"
          errorIconName="close" />
      </View>
    </View>
  );
}

const mapStateToProps = state => ({
  user: state.userdata.user,
  field: state.userdata.field,
  isLoading: state.userdata.isLoading
});

const mapDispatchToProps = (dispatch) => {
  return {
    loginAction: (username, password, callback) => dispatch(loginAction(username, password, callback)),
    loginfield: (field) => dispatch(loginfield(field)),
    userdata: (data) => dispatch(userdata(data)),
    toHome: () => dispatch(push('/'))
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm));
