import colors from '../../config/colors';

import {
  Platform,
  StatusBar,
  StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
  closeIcon: {
    position: 'absolute',
    left: 10,
    top: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  deleteIcon: {
    position: 'absolute',
    right: 10,
    top: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  container: {
    backgroundColor: colors.black,
    flex: 1
  },
  image: {
    height: '100%',
    width: '100%'
  }
});

export default styles;