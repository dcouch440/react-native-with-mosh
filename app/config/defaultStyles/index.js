import colors from "../colors";
import { Platform } from 'react-native';

const defaultStyles = {
  colors,
  text: {
    color: colors.dark,
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir'
  }
}

export default defaultStyles;