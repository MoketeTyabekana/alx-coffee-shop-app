import { HeaderProps } from "@/interfaces";
import { styles } from "@/styles/_details";
import React from 'react';
import { Text, View } from 'react-native';

export default function Header({ title }: HeaderProps) {
  return (
    <>
      <View style={styles.header}>
   <Text style={styles.headerTitle}>{title}</Text>
 </View>
    </>
  );
}
