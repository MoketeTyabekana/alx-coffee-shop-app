import { CoffeeCardProps } from "@/interfaces";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../styles/_home";




export default function CoffeeCard({ coffee, onPress }: CoffeeCardProps) {

  const mediumSize = coffee.sizes.find((s) => s.size === "Medium") || coffee.sizes[0];
 const router = useRouter();

  const handlePress = () => {
   router.push({
  pathname: "/details/[coffeeId]",
  params: { coffeeId: String(coffee.id) },
});

  };

  return (
    <TouchableOpacity  style={styles.card} onPress={handlePress}>
      <View style={styles.imageContainer}>
        <Image source={coffee.image} style={styles.image} />
        <View style={styles.rating}>
          <Ionicons name="star" size={14} color="#FFC529" />
          <Text style={styles.ratingText}>{coffee.rating}</Text>
        </View>
      </View>
      <Text style={styles.name}>{coffee.name}</Text>
      <Text style={styles.descriptor}>{coffee.descriptor}</Text>

      <View style={styles.bottomRow}>
        <Text style={styles.price}>${mediumSize.price.toFixed(2)}</Text>
        <Pressable style={styles.addBtn} onPress={onPress}>
          <Ionicons name="add" size={22} color="#fff" />
        </Pressable>
      </View>


    </TouchableOpacity>
  );
}


