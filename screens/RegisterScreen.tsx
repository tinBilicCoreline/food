import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { StyledPressable } from "../components/StyledPressable";
import { StyledTextInput } from "../components/StyledTextInput";
import Colors from "../constants/Colors";
import { useUser } from "../hooks/useUser";

export default function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { register } = useUser();

  return (
    <LinearGradient
      colors={[Colors.light.maize, Colors.light.orangish]}
      style={styles.container}
    >
      <StyledTextInput label="Your name" onChangeText={setName} value={name} />
      <StyledTextInput label="Email" onChangeText={setEmail} value={email} />
      <StyledTextInput
        label="Password (min 6 characters)"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      <View style={{ alignItems: "center" }}>
        <StyledPressable
          title="SIGN UP"
          type="secondary"
          onPress={() => register({ name, email, password })}
        />
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 38,
    paddingTop: 100,
  },
});
