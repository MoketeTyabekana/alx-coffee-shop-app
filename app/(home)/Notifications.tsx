import { styles } from "@/styles/_notifications";
import { Header } from "@react-navigation/elements";
import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function NotificationsScreen() {
  return (
     <SafeAreaProvider>
   <SafeAreaView style={styles.flexOne}>
     <View style={{backgroundColor:"#ffffffff",flex:1}}>
       <Header title="Notifications"/>
       <View style={styles.container}>
         <Text>Notifications</Text>
       </View>
     </View>
   </SafeAreaView>
 </SafeAreaProvider>
  );
}