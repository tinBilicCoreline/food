import {
  ImageSourcePropType,
  PressableProps,
  Image,
  ButtonProps,
  Pressable,
  StyleSheet,
} from "react-native";
import { Text } from "./Themed";
import Colors from "../constants/Colors";

export function StyledPressableWithIcon(
  props: ButtonProps &
    PressableProps & {
      title: string;
      onPress: () => void;
      type: "primary" | "secondary" | "transparent";
      icon: ImageSourcePropType;
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
      <Image source={props.icon} style={iconStyles({ size: 20 }).icon} />
      <Text style={[styles.general.text, styles[props.type].text]}>
        {props.title}
      </Text>
    </Pressable>
  );
}

const iconStyles = ({ size }: { size: number }) =>
  StyleSheet.create({
    icon: {
      width: size,
      height: size,
      marginRight: 10,
    },
  });

const styles = StyleSheet.create({
  general: {
    container: {
      flexDirection: "row",
      paddingHorizontal: 25,
      alignItems: "center",
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
