import { StyleSheet } from "react-native";
import colors from "../../colors";

const styles = StyleSheet.create({
  container: {
    borderStyle: 'solid',
    borderColor: 'black',
    flexDirection: 'row',
    width: '100%',
  },
  titleText: {
    fontWeight: 'bold'
  },
  subText: {
    color: colors.medium
  },
  image: {
    width: 70,
    height: 70,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 35,
    marginRight: 10
  },
});

export default styles;