import { styles } from "@/styles/_home";
import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Pressable } from 'react-native';

export default function AddToCart({ style }) {

  return (
    <>
       <Pressable style={[styles.addBtn, style]} >
   <MaterialIcons name="add-shopping-cart" size={24} color="#fff" />
 </Pressable>
    </>
  );
}
