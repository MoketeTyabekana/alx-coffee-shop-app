import Button from "@/components/common/Button";
import { BEAN, DELIVERY, MILK } from "@/constants/index";
import { styles } from "@/styles/_details";
import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";

import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { coffees } from "../../constants/data";

export default function CoffeeDetails() {
  const { coffeeId } = useLocalSearchParams();
  const coffee = coffees.find((c) => c.id === Number(coffeeId));
  const router = useRouter();


  if (!coffee) return <Text>Coffee not found</Text>;
  const [selectedSize, setSelectedSize] = useState(
  coffee.sizes.length > 0 ? coffee.sizes[0] : { size: "N/A", price: 0 }
);

  return (

    
    <SafeAreaProvider>
      <SafeAreaView style={styles.flexOne}>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => router.back()}>
              <Entypo name="chevron-thin-left" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Detail</Text>
            <FontAwesome6 name="heart" size={24} color="black" />
          </View>

          <Image source={coffee.image} style={styles.coffeeImage} />

          <View style={styles.coffeeDetails}>
            <View>
              <Text style={styles.coffeeName}>{coffee.name}</Text>
              <Text style={styles.coffeeDescriptor}>
                {coffee.descriptor ?? "Signature blend"}
              </Text>
            </View>
            <View style={styles.icons}>
              <Image source={DELIVERY} style={styles.icon} />
              <Image source={BEAN} style={styles.icon} />
              <Image source={MILK} style={styles.icon} />
            </View>
          </View>

          <View style={styles.ratingRow}>
            <AntDesign name="star" size={24} color="#FFC529" />
            <Text style={styles.ratingText}>{coffee.rating}</Text>
            <Text style={styles.ratingCount}>{coffee.numberOfRatings}</Text>
          </View>

          <View>
            <Text style={styles.sectionTitle}>Description</Text>
            <Text>{coffee.description}</Text>
          </View>

<View>
      <Text style={styles.sectionTitle}>Size</Text>
      <View style={styles.sizeRow}>
        {coffee.sizes.map((size) => (
          <TouchableOpacity
            key={size.size}
            style={[
              styles.sizeBox,
              selectedSize.size === size.size && styles.selectedSizeBox,
            ]}
            onPress={() => setSelectedSize(size)}
          >
            <Text style={styles.sizeText}>{size.size}</Text>
          </TouchableOpacity>
        ))}
      </View>


          <View style={styles.priceRow}>
            <View style={styles.prices}>
              <Text style={{ color: "gray", fontSize: 16 }}>Price</Text>
              <Text style={styles.priceText}>
                ${selectedSize.price.toFixed(2)}
              </Text>
            </View>

            <Button title="Buy Now" onPress={() => console.log("Cart")} />
          </View>
        </View>
        <View/>
       </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
