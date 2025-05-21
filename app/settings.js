import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useRef, useState } from "react";
import {
  Animated,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";

export default function Settings() {
  const [backgroundPlay, setBackgroundPlay] = useState(true);
  const [notifications, setNotifications] = useState(false);
  const fadeIn = useRef(new Animated.Value(0)).current; // ✅ fix: useRef ensures stable value

  useEffect(() => {
    const loadSettings = async () => {
      try {
        const bgPlay = await AsyncStorage.getItem("backgroundPlay");
        const notif = await AsyncStorage.getItem("notifications");

        if (bgPlay !== null) setBackgroundPlay(bgPlay === "true");
        if (notif !== null) setNotifications(notif === "true");
      } catch (error) {
        console.log("Error loading settings:", error);
      }
    };

    loadSettings();

    // ✅ Proper animation setup
    Animated.timing(fadeIn, {
      toValue: 1,
      duration: 600,
      useNativeDriver: true,
    }).start();
  }, []);

  const toggleBackgroundPlay = async (value) => {
    try {
      setBackgroundPlay(value);
      await AsyncStorage.setItem("backgroundPlay", value.toString());
    } catch (error) {
      console.log("Error saving backgroundPlay:", error);
    }
  };

  const toggleNotifications = async (value) => {
    try {
      setNotifications(value);
      await AsyncStorage.setItem("notifications", value.toString());
    } catch (error) {
      console.log("Error saving notifications:", error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Animated.View style={[styles.animatedWrapper, { opacity: fadeIn }]}>
        <Text style={styles.header}>⚙️ App Settings</Text>

        <View style={styles.card}>
          <View style={styles.settingRow}>
            <View>
              <Text style={styles.settingText}>🎵 Background Play</Text>
              <Text style={styles.subText}>
                Continue audio while app is in background.
              </Text>
            </View>
            <Switch
              value={backgroundPlay}
              onValueChange={toggleBackgroundPlay}
              trackColor={{ false: "#ccc", true: "#4CAF50" }}
              thumbColor={backgroundPlay ? "#fff" : "#f4f3f4"}
            />
          </View>

          <View style={styles.settingRow}>
            <View>
              <Text style={styles.settingText}>🔔 Notifications</Text>
              <Text style={styles.subText}>
                Get notified about new shows and updates.
              </Text>
            </View>
            <Switch
              value={notifications}
              onValueChange={toggleNotifications}
              trackColor={{ false: "#ccc", true: "#4CAF50" }}
              thumbColor={notifications ? "#fff" : "#f4f3f4"}
            />
          </View>
        </View>

        <Text style={styles.note}>
          Your preferences are saved automatically and apply immediately.
        </Text>
      </Animated.View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
    flexGrow: 1,
  },
  animatedWrapper: {
    width: "100%",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 25,
    textAlign: "center",
    color: "#003366",
    fontFamily: "serif",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 14,
    padding: 20,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  settingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 15,
  },
  settingText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#222",
    fontFamily: "serif",
  },
  subText: {
    fontSize: 13,
    color: "#666",
    fontStyle: "italic",
    marginTop: 3,
  },
  note: {
    marginTop: 30,
    textAlign: "center",
    color: "#888",
    fontSize: 13,
    fontStyle: "italic",
  },
});
