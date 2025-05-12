import { ScrollView, StyleSheet, Text, View } from "react-native";

const shows = [
  { time: "6am - 8am", title: "Early Rise Gospel" },
  { time: "9am - 11am", title: "Morning Talk with Sarah" },
  { time: "12pm - 2pm", title: "Lunch Hour Music" },
  { time: "3pm - 5pm", title: "Youth Vibes" },
  { time: "7pm - 9pm", title: "Evening News & Interviews" },
];

export default function Schedule() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>📅 Daily Program Guide</Text>
      {shows.map((show, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.time}>{show.time}</Text>
          <Text style={styles.title}>{show.title}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    width: "100%",
    padding: 15,
    borderRadius: 10,
    backgroundColor: "#f0f0f0",
    marginBottom: 10,
  },
  time: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222",
    marginTop: 5,
  },
});
