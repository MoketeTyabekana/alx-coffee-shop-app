import { styles } from "@/styles/_favorites";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function FavoriteCard({ coffee }) {
  const router = useRouter();

  const handlePress = () => {
    router.push({
      pathname: "/details/[coffeeId]",
      params: { coffeeId: String(coffee.id) },
    });
  };

  return (
    <>
      <TouchableOpacity
        style={styles.card}
        onPress={handlePress}
      >
        <Image source={coffee.image} style={styles.image} />
        <View>
          <Text style={styles.name}>{coffee.name}</Text>
          <Text style={styles.descriptor}>{coffee.descriptor}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
}
