import { StyleSheet } from "react-native";
import colors from "../../config/colors";

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    color: colors.black,
    fontSize: 24,
    fontWeight: '500'
  },
  price: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: 20,
    marginVertical: 10,
  },
  image: {
    width: '100%',
    height: 300
  },
  userContainer: {
    marginVertical: 40
  }
});

export default styles;