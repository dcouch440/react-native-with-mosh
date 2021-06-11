import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  attr: ({ size, backgroundColor }) => ({
    width: size,
    height: size,
    borderRadius: size / 2,
    backgroundColor,
    justifyContent: 'center',
    alignItems: 'center'
  })
});

export default styles;