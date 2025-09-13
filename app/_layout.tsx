import { FavoritesProvider } from "@/context/FavoritesContext";
import { Stack } from "expo-router";



export default function RootLayout() {
  return (
    <FavoritesProvider>
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="/" />
    </Stack>
    </FavoritesProvider>
  );
}
