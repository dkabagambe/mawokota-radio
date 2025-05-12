import { useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";

export default function Settings() {
  const [backgroundPlay, setBackgroundPlay] = useState(true);
  const [notifications, setNotifications] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>⚙️ App Settings</Text>

      <View style={styles.settingRow}>
        <Text style={styles.settingText}>Background Play</Text>
        <Switch
          value={backgroundPlay}
          onValueChange={(value) => setBackgroundPlay(value)}
        />
      </View>

      <View style={styles.settingRow}>
        <Text style={styles.settingText}>Notifications</Text>
        <Switch
          value={notifications}
          onValueChange={(value) => setNotifications(value)}
        />
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
    backgroundColor: "#fff",
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
