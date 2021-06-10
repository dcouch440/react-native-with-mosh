import { Platform } from "react-native";

const platform = ({ android, ios }) => {
  if (Platform.OS === 'android') {
    return android;
  } else if (Platform.OS === 'ios') {
    return ios;
  }
}

export default platform;