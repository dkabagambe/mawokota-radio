import { useRouter } from "expo-router";
import { Button, Image, StyleSheet, Text, View } from "react-native";

export default function SplashScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/covermawokota.jpeg")}
        style={styles.image}
      />
      <Text style={styles.title}>Welcome to Mawokota Radio</Text>
      <Button title="Enter App" onPress={() => router.push("/home")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
