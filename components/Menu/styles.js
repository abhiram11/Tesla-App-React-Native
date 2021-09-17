import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  menuItems: {
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
  },
  menuRow: {
    marginTop: 15,
    marginBottom: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    color: "white",
  },
  menuTextBox: {
    flexGrow: 1,
  },
  menuText: {
    textTransform: "uppercase",
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 15,
  },

  subTitle: {
    color: "grey",
    fontSize: 14,
    marginLeft: 15,
  },

  arrowIcon: {
    color: "#4D4D4E",
  },
});

export default styles;
