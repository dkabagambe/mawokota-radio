import { Image, StyleSheet, Text, View } from "react-native";

export default function About() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/covermawokota.jpeg")}
        style={styles.logo}
      />
      <Text style={styles.title}>About Mawokota Radio</Text>
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
    backgroundColor: "#fff",
  },
  logo: {
    width: 140,
    height: 140,
    borderRadius: 12,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
    color: "#444",
    marginBottom: 15,
  },
  mission: {
    fontSize: 16,
    textAlign: "center",
    fontStyle: "italic",
    color: "#2a6",
  },
});
