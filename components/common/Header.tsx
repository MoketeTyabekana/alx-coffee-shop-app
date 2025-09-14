import { HeaderProps } from "@/interfaces";
import { styles } from "@/styles/_header";
import React from 'react';
import { Text, View } from 'react-native';

export default function Header({ title ,icon }: HeaderProps) {
  return (
   
      <View style={styles.header}>
        <View>{icon}</View>
    <Text style={styles.title}>{title}</Text>

 </View>
  
  );
}
