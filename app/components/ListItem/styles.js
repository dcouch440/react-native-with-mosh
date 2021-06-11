import { StyleSheet } from "react-native";
import colors from "../../colors";

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: 'row',
    backgroundColor: colors.white
  },
  detailsContainer: {
    paddingLeft: 15,
    justifyContent: 'center'
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
  },
});

export default styles;