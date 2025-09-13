import CoffeeCard from "@/components/CoffeeCard";
import { useFavorites } from "@/context/FavoritesContext";
import { styles } from "@/styles/_favorites";
import { FlatList, SafeAreaView, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.flexOne}>
        <View style={styles.container}>
          <View>
            <Text style={{paddingHorizontal:20,paddingVertical:15, backgroundColor:"#C67C4E",fontSize:18,fontWeight:600,color:"#fff"}}>
              Your favorites
            </Text>
          </View>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
          paddingHorizontal: 10,
        }}
        contentContainerStyle={{ paddingVertical: 10 }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <CoffeeCard coffee={item} />}
      />
    </View>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}
