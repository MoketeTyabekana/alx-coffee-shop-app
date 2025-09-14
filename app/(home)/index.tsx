import CoffeeCard from "@/components/CoffeeCard";
import MyDropdown from "@/components/Dropdown";
import { styles } from "@/styles/_home";
import { Feather } from "@expo/vector-icons";
import { ImageBackground } from "expo-image";
import React, { useState } from "react";
import {
  FlatList,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { coffees } from "../../constants/data";

export default function HomeScreen() {
  const coffeeTypes = [
    "All Coffee",
    "Espresso",
    "Latte",
    "Cappuccino",
    "Mocha",
  ];

const [selectedCoffeeType, setSelectedCoffeeType] = useState("All Coffee");

const filteredCoffees =
  selectedCoffeeType?.toLowerCase() === "all coffee"
    ? coffees
    : coffees.filter(
        (coffee) =>
          coffee.type?.toLowerCase() === selectedCoffeeType?.toLowerCase()
      );



  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Location</Text>
          <MyDropdown />
          <View style={styles.searchContent}>
            <View style={styles.searchContainer}>
              <Feather name="search" size={20} color="#555555ff" />
              <TextInput style={styles.search} placeholder="Search Coffee" />
            </View>
            <Feather
              name="filter"
              size={20}
              color="#fff"
              style={{
                backgroundColor: "#C67C4E",
                padding: 16,
                borderRadius: 8,
              }}
            />
          </View>
        </View>

        <View style={styles.banner}>
          <ImageBackground
            source={require("../../assets/images/banner.png")}
            style={styles.bannerImage}
          >
            <Text style={styles.bannerText}>Promo</Text>
          </ImageBackground>
        </View>

        <View style={styles.coffeeList}>
          <ScrollView
            horizontal
            contentContainerStyle={{ paddingHorizontal: 10 }}
            showsHorizontalScrollIndicator={false}
            style={{ flexDirection: "row", marginBottom: 20 }}
          >
            {coffeeTypes.map((type, idx) => (
              <TouchableOpacity
                key={type}
                style={[
                  styles.coffeeBtn,
                  {
                    backgroundColor:
                      selectedCoffeeType === type ? "#C67C4E" : "#e0e0e0",
                    marginRight: idx === coffeeTypes.length - 1 ? 0 : 10,
                  },
                ]}
                onPress={() => setSelectedCoffeeType(type)}
              >
                <Text
                  style={[
                    styles.coffeeBtnText,
                    { color: selectedCoffeeType === type ? "#fff" : "#000" },
                  ]}
                >
                  {type}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          
          <FlatList
           
            data={coffees}
            keyExtractor={(item) => item.id}
            numColumns={2}
            renderItem={({ item }) => <CoffeeCard coffee={item} />}
            columnWrapperStyle={{
              justifyContent: "space-between",
              paddingHorizontal: 10,
            }}
            contentContainerStyle={{ paddingVertical: 10 }}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
