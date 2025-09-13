import FavoriteCard from "@/components/common/FavoriteCard";
import { useFavorites } from "@/context/FavoritesContext";
import { styles } from "@/styles/_favorites";
import { SafeAreaView, ScrollView, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.flexOne}>
        <View style={styles.container}>
             <ScrollView contentContainerStyle={styles.grid}>
      <View style={{ flexDirection: "column", }}>
        {favorites.map((coffee) => (
          <FavoriteCard key={coffee.id} coffee={coffee} />
        ))}
      </View>
    </ScrollView>

        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
