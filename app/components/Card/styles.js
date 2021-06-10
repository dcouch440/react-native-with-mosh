import { StyleSheet } from "react-native";
import colors from '../../colors';

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.white,
    marginBottom: 20,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: "cover",
  },
  detailsContainer: {
    padding: 20
  }
});

export default styles;