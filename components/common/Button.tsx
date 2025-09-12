import { ButtonProps } from "@/interfaces";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";


export default function Button({ title, onPress }: ButtonProps) {
  return (
    <>
      <TouchableOpacity style={styles.addToCartBtn} onPress={onPress}>
        <Text style={styles.addToCartText}>{title}</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  addToCartText: {
    paddingVertical: 16,
    backgroundColor: "#C67C4E",
    color: "#fff",
    fontWeight: "600",
    minWidth: 250,
    textAlign: "center",
    borderRadius: 8,
    fontSize: 18,
  },
    addToCartBtn: {
    alignItems: "center",
    justifyContent: "center",
  },
});
