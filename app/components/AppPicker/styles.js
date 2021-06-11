import colors from "../../config/colors";

const { StyleSheet, Platform } = require("react-native");

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    marginVertical: 10
  },
  icon: {
    alignSelf: 'center',
    marginRight: 10
  },
  textInput: {
    color: colors.dark,
    fontSize: 18,
    fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir'
  },
  text: {
    flex: 1
  }
});

export default styles;