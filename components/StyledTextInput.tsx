import React from "react";
import { TextInput, TextInputProps, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import { ProximaSemiBoldWhite } from "./StyledText";

export function StyledTextInput(
  props: TextInputProps & { label?: string; labelColor?: string }
) {
  return (
    <>
      {!!props?.label && (
        <ProximaSemiBoldWhite
          style={{
            marginBottom: 7,
            color: props?.labelColor || Colors.light.white,
          }}
        >
          {props.label}
        </ProximaSemiBoldWhite>
      )}
      <TextInput
        {...props}
        autoCorrect={false}
        style={[styles.container, props.style]}
        autoCapitalize="none"
        selectionColor={Colors.light.aquaGreen}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 4,
    backgroundColor: Colors.light.white,
    shadowColor: Colors.light.greyishBrown30,
    height: 35,
    marginBottom: 15,
    padding: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 3,
    shadowOpacity: 1,
  },
  text: {
    fontFamily: "ProximaNovaAlt-Semibold",
    fontSize: 16,
    lineHeight: 18,
    textAlign: "center",
    letterSpacing: 0,
  },
});
