import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useCallback } from "react";
import { Image, StyleSheet } from "react-native";
import { StyledPressable } from "../components/StyledPressable";
import { StyledPressableWithIcon } from "../components/StyledPressableWithIcon";
import {
  ProximaBold,
  ProximaRegular,
  ProximaSemiBoldWhite,
} from "../components/StyledText";
import Colors from "../constants/Colors";

export const LandingScreen = () => {
  const { navigate } = useNavigation();

  const handleNavigateToLogin = useCallback(() => {
    navigate("login");
  }, [navigate]);

  const handleNavigateToRegister = useCallback(() => {
    navigate("register");
  }, [navigate]);

  return (
    <LinearGradient
      colors={[Colors.light.maize, Colors.light.orangish]}
      style={styles.container}
      locations={[0.1, 0.5]}
    >
      <Image
        source={require("../assets/icons/logo.png")}
        style={styles.image}
      />
      <ProximaBold fontSize={30} style={{ marginBottom: 32 }}>
        FoodStyles
      </ProximaBold>
      <ProximaRegular
        fontSize={18}
        style={{ marginBottom: 23, textAlign: "center" }}
      >
        Sign in to be able to save your preferences and settings.
      </ProximaRegular>
      <StyledPressableWithIcon
        type="primary"
        full
        icon={require("../assets/icons/apple.png")}
        title="Sign in with Apple"
        onPress={() => console.log("pressed")}
      />
      <StyledPressableWithIcon
        type="primary"
        full
        icon={require("../assets/icons/facebook.png")}
        title="Sign in with Facebook"
        onPress={() => console.log("pressed")}
      />
      <StyledPressableWithIcon
        type="primary"
        full
        icon={require("../assets/icons/google.png")}
        title="Sign in with Google"
        onPress={() => console.log("pressed")}
      />
      <StyledPressable
        type="primary"
        full
        title="Sign up with Email"
        onPress={handleNavigateToRegister}
      />
      <StyledPressable
        type="transparent"
        full
        title="Log in with Email"
        onPress={handleNavigateToLogin}
        style={{ marginBottom: 10 }}
      />
      <ProximaSemiBoldWhite style={styles.terms} fontSize={16}>
        By signing in you accept the{" "}
        <ProximaSemiBoldWhite style={styles.links}>
          General Terms
        </ProximaSemiBoldWhite>{" "}
        and{" "}
        <ProximaSemiBoldWhite style={styles.links}>
          Privacy Policy
        </ProximaSemiBoldWhite>{" "}
      </ProximaSemiBoldWhite>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 38,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  image: {
    width: 71,
    height: 84,
    marginBottom: 14,
  },
  terms: {
    fontSize: 13,
    textAlign: "center",
    maxWidth: 250,
  },
  links: {
    textDecorationLine: "underline",
  },
});
