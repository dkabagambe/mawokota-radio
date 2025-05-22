import { Audio } from "expo-av";
import { useRouter } from "expo-router";
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
  const router = useRouter();

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
      <StatusBar barStyle="dark-content" backgroundColor="#f9f9f9" />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Image
          source={require("../assets/images/covermawokota.jpeg")}
          style={styles.coverImage}
        />

        <Text style={styles.header}>📻 Mawokota Radio</Text>
        <Text style={styles.tagline}>Eddobozi Lya Banampigi</Text>

        <View style={styles.playerContainer}>
          {isLoading ? (
            <ActivityIndicator size="large" color="#007B4F" />
          ) : (
            <TouchableOpacity
              style={[styles.button, isPlaying ? styles.pause : styles.play]}
              onPress={isPlaying ? stopStream : playStream}
            >
              <Text style={styles.buttonText}>
                {isPlaying ? "⏸ Pause" : "▶️ Play Live"}
              </Text>
            </TouchableOpacity>
          )}
          <Text style={styles.cta}>🎧 Tune In Live from Anywhere</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>📅 Upcoming Shows</Text>
          <Text style={styles.show}>
            • Morning Talk with Prince O Ssalongo (9AM - 11AM)
          </Text>
          <Text style={styles.show}>• Youth Vibes (3PM - 5PM)</Text>
        </View>
      </ScrollView>

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
    overflow: "hidden",
  },
  scrollContainer: {
    padding: 14,
    alignItems: "center",
    paddingBottom: 20,
  },
  coverImage: {
    width: "100%",
    height: 200,
    borderRadius: 14,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: "#007B4F",
  },
  header: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 6,
    textAlign: "center",
  },
  tagline: {
    fontSize: 16,
    color: "#B22222",
    fontWeight: "600",
    marginBottom: 24,
    fontStyle: "italic",
    textAlign: "center",
  },
  playerContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  button: {
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 30,
    marginVertical: 12,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  play: {
    backgroundColor: "#007B4F",
  },
  pause: {
    backgroundColor: "#B22222",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  cta: {
    fontSize: 15,
    color: "#333",
    fontStyle: "italic",
    textAlign: "center",
    marginTop: 4,
  },
  section: {
    width: "100%",
    backgroundColor: "#ffffff",
    padding: 18,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#222",
    marginBottom: 12,
    textAlign: "center",
  },
  show: {
    fontSize: 16,
    color: "#444",
    marginBottom: 6,
    fontFamily: "serif",
    textAlign: "center",
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
    borderTopWidth: 2,
    borderTopColor: "#007B4F",
    paddingBottom: 20,
  },
  menuText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
  },
});
