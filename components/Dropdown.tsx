import { styles } from "@/styles/_home";
import AntDesign from '@expo/vector-icons/AntDesign';
import React, { useState } from "react";
import { Text, View } from "react-native";
import SelectDropdown from "react-native-select-dropdown";

const countries = ["Bloemfontein, SA", "Midrand, SA", "Botshabelo, SA", "Johannesburg, SA", "Cape Town, SA", "Durban, SA"];

const MyDropdown = () => {
   const defaultLocationName = "Bloemfontein, SA";

  const [selectedCountry, setSelectedCountry] = useState(defaultLocationName);

  return (
    <View style={styles.dropDown}>
      <SelectDropdown
        data={countries}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem);
        }}
        renderButton={(selectedItem, isOpened) => (
          <View style={styles.dropDownBtn}>
            <Text style={{ color: "#555555ff",fontSize:22 }}>{selectedItem || "Select Country"}</Text>
            <AntDesign name={isOpened ? "up" : "down"} size={12} color={"#555555ff"} />
          </View>
        )}
        renderItem={(item, index, isSelected) => (
          <View style={{ padding: 10, backgroundColor: isSelected ? "#ddd" : "#fff" ,width: '100%'}}>
            <Text style={styles.dropDownText}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default MyDropdown;
