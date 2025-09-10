import { styles } from "@/styles/_details";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Image, SafeAreaView, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { coffees } from "../../constants/data";

export default function CoffeeDetails() {
  const { coffeeId } = useLocalSearchParams();
  const coffee = coffees.find((c) => c.id === Number(coffeeId));

  if (!coffee) return <Text>Coffee not found</Text>;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.flexOne}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Entypo name="chevron-thin-left" size={24} color="black" />
            <Text style={styles.headerTitle}>Details</Text>
            <FontAwesome6 name="heart" size={24} color="black" />
          </View>
          <Image source={coffee.image} style={styles.coffeeImage} />
          <Text style={{ fontSize: 24 }}>{coffee.name}</Text>
          <Text>{coffee.description}</Text>
          <Text>Rating: {coffee.rating}</Text>
          <Text>Descriptor: {coffee.descriptor ?? "Signature blend"}</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
