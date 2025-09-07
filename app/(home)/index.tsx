import { styles } from "@/styles/_home";
import { Feather } from "@expo/vector-icons"; // <-- Import Feather icons
import React from "react";
import { Text, TextInput, View } from "react-native";

export default function HomeScreen() {
  const options = ["Espresso", "Latte", "Cappuccino"];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Location</Text>

        <View style={styles.searchContent}>
          <View style={styles.searchContainer}>
            <Feather name="search" size={20} color="#555555ff" />
            <TextInput style={styles.search} placeholder="Search Coffee" />
          </View>
         <Feather name="filter" size={20} color="#fff" style={{ backgroundColor: "#C67C4E", padding: 16, borderRadius: 8 }} />
        </View>
      </View>
    </View>
  );
}
