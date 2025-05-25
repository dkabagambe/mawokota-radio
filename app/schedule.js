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
  {
    title: "🌅 MORNING DOZ",
    time: "6:00am - 10:00am",
    days: "Mon to Fri",
    presenter: "Omukonkonyi William Pro with Priscilla",
  },
  {
    title: "🚐 MAWOKOTA EXPRESS",
    time: "12:00pm - 3:00pm",
    days: "Mon to Fri",
    presenter: "Maama Bulamu Kerah Promise",
  },
  {
    title: "🏟️ OLUTINDO LWEBYEMIZANYO",
    time: "3:00pm - 4:00pm",
    days: "Mon to Fri",
    presenter: "Kayemba Bashir",
  },
  {
    title: "🎧 VIBE KU VIBE",
    time: "4:00pm - 8:00pm",
    days: "Mon to Fri",
    presenter: "DJ Davie Kingmino",
  },
  {
    title: "🎵 TOP 10 Tonight",
    time: "10:00pm - 11:00pm",
    days: "Mon to Fri",
    presenter: "Dr KalisMart",
  },
  {
    title: "❤️ EKIRUNGO KY'OMUKWANO",
    time: "11:00pm - 1:00am",
    days: "Mon to Thursday",
    presenter: "Handsome Jac",
  },
  {
    title: "🎶 NIGHT MIX",
    time: "1:00am - 5:00am",
    days: "Mon to Thursday",
    presenter: "Handsome Jac",
  },
  {
    title: "🎉 FRIDAY NIGHT JAM",
    time: "11:00pm - 6:00am",
    days: "Friday",
    presenter: "Omusanirizi Izzly Pro",
  },
  {
    title: "🎊 SATURDAY CHEZA",
    time: "6:00am - 10:00am",
    days: "Saturday",
    presenter: "Prince O Ssalongo",
  },
  {
    title: "📻 PROGRAM OMUNAALA",
    time: "10:00am - 12:00pm",
    days: "Saturday",
    presenter: "Mayiga Paul",
  },
  {
    title: "🔊 SATURDAY KOONA",
    time: "12:00pm - 4:00pm",
    days: "Saturday",
    presenter: "DJ Davie Kingmino",
  },
  {
    title: "⭐ SATURDAY SPECIAL",
    time: "5:00pm - 7:00pm",
    days: "Saturday",
    presenter: "Fik",
  },
  {
    title: "🎛️ SATURDAY MIX",
    time: "7:00pm - 6:00am",
    days: "Saturday",
    presenter: "William Pro Omukonkonyi",
  },
  {
    title: "🙏 AMATENDO SPECIAL",
    time: "6:00am - 10:00am",
    days: "Sunday",
    presenter: "Maama Bulamu Kerah Promise",
  },
  {
    title: "🎼 THE VIBE TUNES",
    time: "10:00am - 3:00pm",
    days: "Sunday",
    presenter: "Handsome Jack",
  },
  {
    title: "🌟 SUNDAY SPECIAL",
    time: "3:00pm - 7:00pm",
    days: "Sunday",
    presenter: "Dr KalisMart",
  },
  {
    title: "🎵 MUSIC BREAK",
    time: "Up to 9:00am",
    days: "Sunday",
    presenter: "—",
  },
  {
    title: "🌄 MUZUKUKE TUDE KUNNONO",
    time: "9:00am - 12:00pm",
    days: "Sunday",
    presenter: "Prince O Ssalongo with Ssalongo Bilooto Muchwezi",
  },
  {
    title: "🌙 SUNDAY NIGHT TUNES",
    time: "12:00am - 5:00am",
    days: "Sunday Night",
    presenter: "Luke MC",
  },
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
