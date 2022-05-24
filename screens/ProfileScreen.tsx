import { StyleSheet } from "react-native";
import { StyledTextInput } from "../components/StyledTextInput";
import React, { useCallback } from "react";
import { Text, View } from "../components/Themed";
import Colors from "../constants/Colors";
import { useRecoilState, useRecoilValue } from "recoil";
import { loginStateAtom } from "../state/state";
import { StyledPressable } from "../components/StyledPressable";

export default function ProfileScreen() {
  const [loginStateValue, setLoginStateValue] = useRecoilState(loginStateAtom);

  const handleLogout = useCallback(() => {
    setLoginStateValue({ token: null, user: null });
  }, [setLoginStateValue]);

  return (
    <>
      <View style={styles.container}>
        <StyledTextInput
          label="Name shown on your shared cards"
          labelColor={Colors.light.greyishBrown}
          value={loginStateValue?.user?.name || ""}
        />
        <StyledTextInput
          label="Email"
          labelColor={Colors.light.greyishBrown}
          value={loginStateValue?.user?.email || ""}
        />
      </View>
      <View style={styles.bottomContainer}>
        <StyledPressable
          onPress={handleLogout}
          title="LOG OUT"
          type="secondary"
        />
      </View>

      <View style={styles.bottomBar} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.backgroundGray,
    paddingHorizontal: 18,
    paddingTop: 100,
  },
  bottomContainer: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    zIndex: 7,
    alignItems: "center",
  },
  bottomBar: {
    position: "absolute",
    bottom: 0,
    zIndex: 5,
    height: 65,
    width: "100%",
    shadowColor: "#b0b0b066",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 7,
    shadowOpacity: 1,
  },
});
