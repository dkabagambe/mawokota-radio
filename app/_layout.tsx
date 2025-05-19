import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        {/* Main navigation is handled inside the (tabs) folder */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        {/* Optional pages directly accessible outside tabs */}
        <Stack.Screen name="about" />
        <Stack.Screen name="home" />
        <Stack.Screen name="index" />
        <Stack.Screen name="schedule" />
        <Stack.Screen name="settings" />
        <Stack.Screen name="splash" />

        {/* Fallback for unknown routes */}
        <Stack.Screen name="+not-found" options={{ title: "Page Not Found" }} />
      </Stack>

      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
    </ThemeProvider>
  );
}
