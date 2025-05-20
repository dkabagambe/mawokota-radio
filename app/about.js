import { Image, StyleSheet, Text, View } from "react-native";

export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Mawokota Radio</Text>
      <Image
        source={require("../assets/images/covermawokota.jpeg")}
        style={styles.logo}
      />
      <Text style={styles.description}>
        Mawokota Radio is your trusted voice for community news, entertainment,
        and cultural programming. We are proud to serve the people of Mawokota
        and beyond with quality content, engaging shows, and local talent.
      </Text>
      <Text style={styles.mission}>
        📡 Mission: To inform, inspire, and connect our community through radio.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f9f9f9",
  },
  logo: {
    width: "90%",
    height: "60%",
    resizeMode: "contain",
    borderRadius: 12,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 24,
    color: "#000",
    fontFamily: "garamond",
  },
  description: {
    fontSize: 18,
    color: "#333",
    marginBottom: 20,
    fontFamily: "garamond",
  },
  mission: {
    fontSize: 16,
    textAlign: "center",
    color: "blue",
    fontFamily: "garamond",
    fontWeight: "bold",
  },
});
