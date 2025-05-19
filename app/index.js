import { useRouter } from "expo-router";
import { Button, Image, StyleSheet, Text, View } from "react-native";

export default function SplashScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Mawokota Radio</Text>
      <Image
        source={require("../assets/images/covermawokota.jpeg")}
        style={styles.image}
      />

      <Button title="Enter App" onPress={() => router.push("/home")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#eee",
  },
  image: {
    width: "90%", // Use percentage or responsive units
    height: "60%", // Adjust height accordingly
    resizeMode: "contain", // Ensure image fits within bounds
    marginBottom: 20,
  },
  title: {
    fontSize: 25, // Consider using responsive font sizes
    fontWeight: "bold",
    marginBottom: 20,
    marginTop: 30,
  },
  Button: {
    backgroundColor: "yellow",
    color: "red",
    padding: "18",
  },
});
