import { styles } from "@/styles/_common";
import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function CartScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.flexOne}>
        <View style={styles.container}>
          <Text>Cart Page</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
