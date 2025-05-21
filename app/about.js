import { ScrollView, StyleSheet, Text, View } from "react-native";
import * as Animatable from "react-native-animatable";

export default function About() {
  return (
    <ScrollView style={styles.wrapper}>
      <Animatable.View
        animation="fadeInUp"
        duration={1000}
        style={styles.container}
      >
        <Text style={styles.title}>About Mawokota Radio</Text>

        <Animatable.Image
          animation="zoomIn"
          duration={1500}
          source={require("../assets/images/covermawokota.jpeg")}
          style={styles.logo}
        />

        <Text style={styles.description}>
          Mawokota Radio is your trusted voice for community news,
          entertainment, and cultural programming. We proudly serve the people
          of Mawokota and beyond with quality content, engaging shows, and local
          talent.
        </Text>

        <View style={styles.missionBox}>
          <Text style={styles.missionTitle}>📡 Our Mission</Text>
          <Text style={styles.missionText}>
            To inform, inspire, and connect our community through impactful
            radio.
          </Text>
        </View>
      </Animatable.View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  container: {
    padding: 24,
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#007B4F",
    fontFamily: "serif",
    textAlign: "center",
    marginBottom: 20,
  },
  logo: {
    width: "100%",
    height: 250,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: "#007B4F",
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    textAlign: "justify",
    color: "#333",
    fontFamily: "garamond",
    marginBottom: 30,
    lineHeight: 26,
  },
  missionBox: {
    backgroundColor: "#e0f2ef",
    padding: 20,
    borderRadius: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 4,
    width: "100%",
    alignItems: "center",
  },
  missionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#004d3f",
    marginBottom: 10,
  },
  missionText: {
    fontSize: 16,
    color: "#004d3f",
    textAlign: "center",
    fontFamily: "garamond",
  },
});
