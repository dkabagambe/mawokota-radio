// 👉 Import your AudioProvider
import { useColorScheme } from "@/hooks/useColorScheme";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";
import { AudioProvider } from "./contexts/AudioContext";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <AudioProvider>
      {/* 👈 Wrap everything inside AudioProvider */}
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="about" />
          <Stack.Screen name="home" />
          <Stack.Screen name="index" />
          <Stack.Screen name="schedule" />
          <Stack.Screen name="settings" />
          <Stack.Screen name="splash" />
          <Stack.Screen
            name="+not-found"
            options={{ title: "Page Not Found" }}
          />
        </Stack>
        <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      </ThemeProvider>
    </AudioProvider>
  );
}
