import { useEffect, useRef } from "react";
import {
  Animated,
  Easing,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const shows = [
  { time: "6am - 8am", title: "🎵 Early Rise Gospel" },
  { time: "9am - 11am", title: "🎙️ Morning Talk with Ssalongo" },
  { time: "12pm - 2pm", title: "🎶 Lunch Hour Music" },
  { time: "3pm - 5pm", title: "🔥 Youth Vibes" },
  { time: "7pm - 9pm", title: "📰 Evening News & Interviews" },
];

export default function Schedule() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();

    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 800,
      easing: Easing.out(Easing.ease),
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>
        📻 Daily Program – Mawokota Radio (99.9 FM)
      </Text>

      <Animated.View
        style={{
          opacity: fadeAnim,
          transform: [{ translateY: slideAnim }],
          width: "100%",
        }}
      >
        {shows.map((show, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.time}>{show.time}</Text>
            <Text style={styles.title}>{show.title}</Text>
          </View>
        ))}
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    alignItems: "center",
    backgroundColor: "#fdfdfd",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 25,
    textAlign: "center",
    color: "#003366",
    fontFamily: "serif",
  },
  card: {
    width: "100%",
    backgroundColor: "#ffffff",
    padding: 18,
    marginBottom: 15,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  time: {
    fontSize: 16,
    fontWeight: "600",
    color: "#555",
    fontFamily: "serif",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 5,
    color: "#111",
    fontFamily: "serif",
  },
});
