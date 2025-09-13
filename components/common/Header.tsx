import { HeaderProps } from "@/interfaces";
import { styles } from "@/styles/_details";
import { Entypo } from '@expo/vector-icons';
import { router } from 'expo-router';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

export default function Header({ title }: HeaderProps) {
  return (
    <>
      <View style={styles.header}>
   <TouchableOpacity onPress={() => router.back()}>
     <Entypo name="chevron-thin-left" size={24} color="black" />
   </TouchableOpacity>
   <Text style={styles.headerTitle}>{title}</Text>
   <View >
    
   </View >
 </View>
    </>
  );
}
