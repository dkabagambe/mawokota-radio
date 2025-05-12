import { Audio } from "expo-av";
import { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Home() {
  const soundRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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
    <View style={styles.container}>
      <Image
        source={require("../assets/images/covermawokota.jpeg")}
        style={styles.logo}
      />
      <Text style={styles.header}>Mawokota Radio</Text>
      <Text style={styles.tagline}>Your Voice, Your Community</Text>

      {isLoading ? (
        <ActivityIndicator
          size="large"
          color="#007B4F"
          style={{ marginVertical: 20 }}
        />
      ) : (
        <TouchableOpacity
          style={[styles.button, isPlaying ? styles.pause : styles.play]}
          onPress={isPlaying ? stopStream : playStream}
        >
          <Text style={styles.buttonText}>{isPlaying ? "Pause" : "Play"}</Text>
        </TouchableOpacity>
      )}

      <Text style={styles.cta}>🎧 Tune In Live</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Upcoming Shows</Text>
        <Text style={styles.show}>• Morning Talk with Sarah (9am - 11am)</Text>
        <Text style={styles.show}>• Youth Vibes (3pm - 5pm)</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 24,
  },
  logo: {
    width: 140,
    height: 140,
    borderRadius: 12,
    marginTop: 40,
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 16,
    color: "#333",
  },
  tagline: {
    fontSize: 14,
    color: "#666",
    marginBottom: 20,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginVertical: 20,
  },
  play: {
    backgroundColor: "#007B4F",
  },
  pause: {
    backgroundColor: "#B22222",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  cta: {
    fontSize: 16,
    fontStyle: "italic",
    color: "#444",
    marginBottom: 30,
  },
  section: {
    width: "100%",
    paddingHorizontal: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    color: "#333",
  },
  show: {
    fontSize: 15,
    marginVertical: 3,
    color: "#555",
  },
});
