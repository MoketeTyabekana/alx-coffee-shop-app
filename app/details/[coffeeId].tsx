import { BEAN, DELIVERY, MILK } from "@/constants/index";
import { styles } from "@/styles/_details";
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { Image, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { coffees } from "../../constants/data";

export default function CoffeeDetails() {
  const { coffeeId } = useLocalSearchParams();
  const coffee = coffees.find((c) => c.id === Number(coffeeId));
  const router = useRouter();

  if (!coffee) return <Text>Coffee not found</Text>;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.flexOne}>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => router.back()}>
              <Entypo name="chevron-thin-left" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.headerTitle}>Details</Text>
            <FontAwesome6 name="heart" size={24} color="black" />
          </View>
          <Image source={coffee.image} style={styles.coffeeImage} />
         <View style= {styles.coffeeDetails}>
          <View>
             <Text style={{ fontSize: 24,fontWeight:600 }}>{coffee.name}</Text>
              <Text style={{ fontSize: 12, color: "gray" }}>{coffee.descriptor ?? "Signature blend"}</Text>
          </View>
           <View style={styles.icons}>
            <Image source={BEAN} style={styles.icon} />
            <Image source={MILK} style={styles.icon} />
            <Image source={DELIVERY} style={styles.icon} />
           </View>
         </View>

         <View style={{ gap: 10, marginTop: 10 ,flexDirection:"row",alignItems:"center",}}>
          <AntDesign name="star" size={24} color="#FFC529" />
          <Text style={{ fontWeight: "500",fontSize: 16 }}>{coffee.rating}</Text>
          <Text style={{ fontSize: 16, color: "gray" }}>{coffee.numberOfRatings}</Text>
         </View>
          <Text>{coffee.description}</Text>
          
         
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
