import { styles } from "@/styles/_common";
import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function NotificationsScreen() {
  return (
     <SafeAreaProvider>
   <SafeAreaView style={styles.flexOne}>
     <View style={styles.container}>
       <Text>Notifications</Text>
     </View>
   </SafeAreaView>
 </SafeAreaProvider>
  );
}