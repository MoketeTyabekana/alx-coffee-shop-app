import { useFavorites } from "@/context/FavoritesContext";
import { styles } from "@/styles/_favorites";
import { Ionicons } from "@expo/vector-icons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";

export default function FavoriteCard({ coffee }) {
  const router = useRouter();
  const mediumSize =
    coffee.sizes.find((s) => s.size === "Medium") || coffee.sizes[0];

  const handlePress = () => {
    router.push({
      pathname: "/details/[coffeeId]",
      params: { coffeeId: String(coffee.id) },
    });
  };

  const { favorites, toggleFavorite } = useFavorites();
  const isFavorite = favorites.some((fav) => fav.id === coffee.id);

  return (
    <>
    <TouchableOpacity
  style={styles.card}
  onPress={handlePress}
  onLongPress={() => toggleFavorite(coffee)}
>
  <Image source={coffee.image} style={styles.image} />

  <View style={styles.contentContainer}>
    <Text style={styles.name}>{coffee.name}</Text>
    <Text style={styles.descriptor}>{coffee.descriptor}</Text>
    <Text style={styles.price}>${mediumSize.price.toFixed(2)}</Text>

    <View style={styles.rating}>
      <Ionicons name="star" size={14} color="#FFC529" />
      <Text style={styles.ratingText}>{coffee.rating}</Text>
    </View>
  </View>

  <View style={styles.buttonContainer}>
    <Pressable style={styles.cartButton}>
      <FontAwesome6 name="cart-plus" size={24} color="#fff" />
    </Pressable>
  </View>
</TouchableOpacity>
    </>
  );
}
