import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function SplashScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Mawokota Radio</Text>
      <Image
        source={require("../assets/images/covermawokota.jpeg")}
        style={styles.image}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/home")}
      >
        <Text style={styles.buttonText}>Enter App</Text>
      </TouchableOpacity>
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
    width: "90%",
    height: "60%",
    resizeMode: "contain",
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 28,
    marginTop: 24,
    color: "#000",
    fontFamily: "garamond",
  },
  button: {
    paddingVertical: 20,
    paddingHorizontal: 50,
    backgroundColor: "#000", // Add a background color
    borderRadius: 5, // Add some rounded corners
  },
  buttonText: {
    fontFamily: "cormorant",
    textTransform: "capitalize",
    color: "#ffffff", // Change text color to white
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
});
