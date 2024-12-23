import { Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/react-logo.png")}
        style={styles.header}
      />
      <Text style={styles.h1}>Hello World!</Text>
      <Text>My first React Native cross platform app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    width: 200,
    height: 200,
    objectFit: "contain",
  },
  h1: {
    fontSize: 32,
    fontWeight: 700,
  },
});
