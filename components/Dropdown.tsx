import React, { useState } from 'react';
import { Text, View, } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';

const countries = ["Egypt", "Canada", "Australia", "Ireland"];

const MyDropdown = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  return (
    <View>
        <SelectDropdown
  data={countries}
  onSelect={(selectedItem, index) => {
    console.log(selectedItem);
  }}
  renderButton={(selectedItem, isOpened) => (
    <View >
      <Text >
        {selectedItem || 'Select Country'}
      </Text>
    </View>
  )}
  renderItem={(item, index, isSelected) => (
    <View >
      <Text >{item}</Text>
    </View>
  )}
/>

    </View>
  );
};

export default MyDropdown;