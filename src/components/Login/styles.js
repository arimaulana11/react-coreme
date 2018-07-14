import { StyleSheet } from 'react-native';

const styles : Object = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fc0'
  },
  loginContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  containerForm: {
    padding: 20
  },
  input: {
    height: 45,
    backgroundColor: '#fff',
    marginBottom: 10,
    padding: 10,
    color: '#333',
    borderRadius: 20
  },
  buttonCenter: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default styles;
