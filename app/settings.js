import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";

export default function Settings() {
  const [backgroundPlay, setBackgroundPlay] = useState(true);
  const [notifications, setNotifications] = useState(false);

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
    <View style={styles.container}>
      <Text style={styles.header}>⚙️ App Settings</Text>

      <View style={styles.settingRow}>
        <Text style={styles.settingText}>Background Play</Text>
        <Switch value={backgroundPlay} onValueChange={toggleBackgroundPlay} />
      </View>

      <View style={styles.settingRow}>
        <Text style={styles.settingText}>Notifications</Text>
        <Switch value={notifications} onValueChange={toggleNotifications} />
      </View>

      <Text style={styles.note}>
        Changes will apply immediately. Customize your experience!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    backgroundColor: "#f9f9f9",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  settingRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 15,
  },
  settingText: {
    fontSize: 16,
  },
  note: {
    marginTop: 30,
    textAlign: "center",
    fontStyle: "italic",
    color: "#888",
  },
});
