import { useEffect } from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Splash({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace("Home");
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/covermawokota.jpeg")}
        style={styles.logo}
      />
      <Text style={styles.title}>Mawokota Radio</Text>
      <Text style={styles.subtitle}>Loud & Clear • Since 2024</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#27ae60",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 140,
    height: 140,
    borderRadius: 12,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
  },
  subtitle: {
    fontSize: 16,
    color: "#eee",
    marginTop: 10,
    fontStyle: "italic",
  },
});
