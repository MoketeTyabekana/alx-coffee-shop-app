import { styles } from "@/styles/_cart";
import { Header } from "@react-navigation/elements";
import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function CartScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.flexOne}>
        <View style={{ backgroundColor: "#ffffffff", flex: 1 }}>
          <Header title="Order" />
          <View style={styles.container}>
            <Text>Cart</Text>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
