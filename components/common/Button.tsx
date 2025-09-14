import { ButtonProps } from "@/interfaces";
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

export default function Button({ title, onPress, variant = "primary", style }: ButtonProps) {
  const variantStyles = {
    primary: styles.primary,
    secondary: styles.secondary,
    outline: styles.outline,
  };

  return (
    <TouchableOpacity style={[styles.buttonBase, variantStyles[variant], style]} onPress={onPress}>
      <Text style={[styles.textBase, variant === "outline" ? styles.textOutline : styles.textDefault]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonBase: {
    paddingVertical: 10,
    paddingHorizontal: 24,
    borderRadius: 2,
    alignItems: "center",
    justifyContent: "center",
    width:"48%"
  },

  primary: {
    backgroundColor: "#C67C4E",
  },

  secondary: {
    backgroundColor: "#e0e0e0",
  },

  outline: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#C67C4E",
  },

  textBase: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },

  textDefault: {
    color: "#fff",
  },

  textOutline: {
    color: "#C67C4E",
  },
});