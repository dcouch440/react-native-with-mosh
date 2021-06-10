import { Platform, StatusBar, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  closeIcon: {
    position: 'absolute',
    width: 50,
    height: 30,
    right: 10,
    backgroundColor: '#fc5c65',
    top: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  deleteIcon: {
    position: 'absolute',
    width: 50,
    height: 30,
    left: 10,
    backgroundColor: '#fc5c65',
    top: Platform.OS === 'android' ? StatusBar.currentHeight : 0

  },
  container: {
    backgroundColor: 'black',
    flex: 1
  },
  image: {
    height: '100%',
    width: '100%'
  }
});

export default styles;