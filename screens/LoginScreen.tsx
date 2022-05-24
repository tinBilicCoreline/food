import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { StyledPressable } from "../components/StyledPressable";
import { StyledTextInput } from "../components/StyledTextInput";
import Colors from "../constants/Colors";
import { useUser } from "../hooks/useUser";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useUser();

  return (
    <LinearGradient
      colors={[Colors.light.maize, Colors.light.orangish]}
      style={styles.container}
    >
      <StyledTextInput label="Email" onChangeText={setEmail} value={email} />
      <StyledTextInput
        label="Password"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      <View style={{ alignItems: "center" }}>
        <StyledPressable
          title="LOG IN"
          type="secondary"
          onPress={() => login({ email, password })}
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
