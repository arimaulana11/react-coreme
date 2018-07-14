import { StyleSheet } from 'react-native';

// define your styles
const styles: Object = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    paddingTop: 40,
    height: 80,
    backgroundColor: '#fc0'
  },
  navBarButton: {
    width: 65
  },
  navBarHeader: {
    flex: 1,
  },
  navBarHeaderText: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff'
  }
});

export default styles;
