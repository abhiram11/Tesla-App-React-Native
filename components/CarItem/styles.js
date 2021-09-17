import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  carContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "orange",
  },

  header: {
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
  },

  icon: {
    color: "white",
  },

  backgroundImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },

  batterySection: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  batteryImage: { width: 70, height: 26, marginRight: 12 },

  batteryText: { color: "white", fontSize: 35, fontWeight: "bold" },

  status: {
    // justifyContent: "center",
    alignItems: "center",
  },

  statusText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },

  controls: { flexDirection: "row", justifyContent: "center", marginTop: 175 },

  controlsButton: {
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 50,
    padding: 18,
    marginLeft: 25,
    //   border: "1px solid"
  },
});

export default styles;
