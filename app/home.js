import { Audio } from "expo-av";
import { useRouter } from "expo-router"; // ✅ Expo Router navigation
import { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Home() {
  const soundRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter(); // ✅ Use this instead of useNavigation()

  const streamUrl = "https://stream-175.zeno.fm/le9vbqo47hotv";

  const playStream = async () => {
    setIsLoading(true);
    try {
      if (soundRef.current) await soundRef.current.unloadAsync();
      const { sound } = await Audio.Sound.createAsync(
        { uri: streamUrl },
        { shouldPlay: true }
      );
      soundRef.current = sound;
      setIsPlaying(true);
    } catch (error) {
      console.log("Error loading stream:", error);
    }
    setIsLoading(false);
  };

  const stopStream = async () => {
    try {
      if (soundRef.current) {
        await soundRef.current.stopAsync();
        await soundRef.current.unloadAsync();
        soundRef.current = null;
      }
      setIsPlaying(false);
    } catch (error) {
      console.log("Error stopping stream:", error);
    }
  };

  useEffect(() => {
    return () => {
      if (soundRef.current) soundRef.current.unloadAsync();
    };
  }, []);

  return (
    <View style={styles.mainContainer}>
      <ScrollView contentContainerStyle={styles.container}>
        <StatusBar barStyle="dark-content" backgroundColor="#f9f9f9" />

        <Image
          source={require("../assets/images/covermawokota.jpeg")}
          style={styles.logo}
          resizeMode="cover"
        />

        <Text style={styles.header}>Mawokota Radio</Text>
        <Text style={styles.tagline}>EDOOBOZI LYA BANAMPIGI</Text>

        {isLoading ? (
          <ActivityIndicator
            size="large"
            color="#007B4F"
            style={styles.loader}
          />
        ) : (
          <TouchableOpacity
            style={[styles.button, isPlaying ? styles.pause : styles.play]}
            onPress={isPlaying ? stopStream : playStream}
          >
            <Text style={styles.buttonText}>
              {isPlaying ? "⏸ Pause" : "▶️ Play"}
            </Text>
          </TouchableOpacity>
        )}

        <Text style={styles.cta}>🎧 Tune In Live</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>📅 Upcoming Shows</Text>
          <Text style={styles.show}>
            • Morning Talk with Prince O Ssalongo (9am - 11am)
          </Text>
          <Text style={styles.show}>• Youth Vibes (3pm - 5pm)</Text>
        </View>
      </ScrollView>

      {/* 🔽 Bottom Menu Navigation */}
      <View style={styles.menuBar}>
        <TouchableOpacity onPress={() => router.push("/home")}>
          <Text style={styles.menuText}>🏠 Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/about")}>
          <Text style={styles.menuText}>ℹ️ About</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/schedule")}>
          <Text style={styles.menuText}>🗓 Schedule</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("/settings")}>
          <Text style={styles.menuText}>⚙️ Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  container: {
    paddingVertical: 20,
    paddingHorizontal: 24,
    alignItems: "center",
    paddingBottom: 100,
  },
  logo: {
    width: "90%",
    height: "60%",
    resizeMode: "contain",
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: "#007B4F",
  },
  header: {
    fontSize: 28,
    fontWeight: "700",
    color: "#222",
    marginBottom: 6,
  },
  tagline: {
    fontSize: 14,
    color: "red",
    fontWeight: "600",
    marginBottom: 24,
    marginTop: 10,
    fontStyle: "italic",
  },
  loader: {
    marginVertical: 20,
  },
  button: {
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 30,
    marginVertical: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  play: {
    backgroundColor: "#007B4F",
  },
  pause: {
    backgroundColor: "#B22222",
  },
  buttonText: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "600",
    textAlign: "center",
  },
  cta: {
    fontSize: 16,
    color: "#000000",
    marginBottom: 30,
    fontFamily: "",
  },
  section: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#f5f5f5",
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#333",
    marginBottom: 20,
  },
  show: {
    fontSize: 17,
    color: "#333",
    marginBottom: 6,
    fontFamily: "garamond",
  },
  menuBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#000",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: "red",
  },
  menuText: {
    fontFamily: "garamond",
    color: "#fff",
    fontWeight: "600",
    fontSize: 18,
  },
});
