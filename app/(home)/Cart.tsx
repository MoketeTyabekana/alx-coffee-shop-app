import { styles } from "@/styles/_cart";
import { Header } from "@react-navigation/elements";
import React, { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Button from "../../components/common/Button";

export default function CartScreen() {
  const [selectedOption, setSelectedOption] = useState<"Delivery" | "Pick Up">(
    "Delivery"
  );

  const handleDelivery = (option: "Delivery" | "Pick Up") => {
    setSelectedOption(option);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.flexOne}>
        <View style={{ backgroundColor: "#ffffffff", flex: 1 }}>
          <Header title="Order" />

          <View style={styles.container}>
            <View style={styles.buttons}>
              <Button
                title="Delivery"
                onPress={() => handleDelivery("Delivery")}
                variant={
                  selectedOption === "Delivery" ? "primary" : "secondary"
                }
              />

              <Button
                title="Pick Up"
                onPress={() => handleDelivery("Pick Up")}
                variant={selectedOption === "Pick Up" ? "primary" : "secondary"}
              />
            </View>
            {selectedOption === "Delivery" ? (
              <View style={styles.deliveryView}>
                <Text style={styles.addressText}>Delivery Address</Text>
                <View >
                  <Text style={styles.name}>Mokete Tyabekana</Text>
                  <Text style={styles.address}>203 heather Road, Midrand 1685</Text>
                </View>
              </View>
            ) : (
              <View style={styles.pickupView}>
                <Text>This is the Pick Up view</Text>
              </View>
            )}
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
