import { PressableProps } from "react-native";
import { Button, ButtonProps, Pressable, StyleSheet } from "react-native";
import { Text } from "../components/Themed";
import Colors from "../constants/Colors";

export function StyledPressable(
  props: ButtonProps &
    PressableProps & {
      title: string;
      onPress: () => void;
      type: "primary" | "secondary" | "transparent";
      full?: boolean;
    }
) {
  return (
    <Pressable
      {...props}
      style={[
        styles.general.container,
        styles[props.type].container,
        props.full ? styles.general.full : "",
        props.style,
      ]}
      onPress={props.onPress}
    >
      <Text style={[styles.general.text, styles[props.type].text]}>
        {props.title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  general: {
    container: {
      paddingHorizontal: 36,
      paddingVertical: 12,
      marginVertical: 7,
      borderRadius: 100,
      shadowColor: Colors.light.greyishBrown30,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowRadius: 7,
      shadowOpacity: 1,
    },
    text: {
      fontFamily: "ProximaNovaAlt-Semibold",
      fontSize: 16,
      lineHeight: 18,
      textAlign: "center",
      letterSpacing: 0,
    },
    full: {
      minWidth: 236,
    },
  },
  primary: {
    container: {
      backgroundColor: Colors.light.white,
    },
    text: {
      color: Colors.light.greyishBrown,
    },
  },
  transparent: {
    container: {
      backgroundColor: "transparent",
    },
    text: {
      color: Colors.light.white,
    },
  },
  secondary: {
    container: {
      backgroundColor: Colors.light.aquaGreen,
    },
    text: {
      color: Colors.light.white,
    },
  },
});
