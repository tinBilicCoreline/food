import Colors from "../constants/Colors";
import { Text, TextProps } from "./Themed";

export function MonoText(props: TextProps) {
  return (
    <Text {...props} style={[props.style, { fontFamily: "space-mono" }]} />
  );
}

export function ProximaBold(props: TextProps) {
  return (
    <Text
      {...props}
      lightColor={Colors.light.white}
      darkColor={Colors.dark.white}
      style={[
        props.style,
        { fontFamily: "ProximaNovaAlt-Bold", fontSize: props?.fontSize || 16 },
      ]}
    />
  );
}

export function ProximaRegular(props: TextProps) {
  return (
    <Text
      {...props}
      lightColor={Colors.light.white}
      darkColor={Colors.dark.white}
      style={[
        props.style,
        {
          fontFamily: "ProximaNovaAlt-Regular",
          fontSize: props?.fontSize || 16,
        },
      ]}
    />
  );
}

export function ProximaSemiBoldWhite(props: TextProps) {
  return (
    <Text
      {...props}
      lightColor={Colors.light.white}
      darkColor={Colors.dark.white}
      style={[
        props.style,
        {
          fontFamily: "ProximaNovaAlt-Semibold",
          fontSize: props?.fontSize || 16,
        },
      ]}
    />
  );
}

export function ProximaSemiBoldGrayishBrown(props: TextProps) {
  return (
    <Text
      {...props}
      lightColor={Colors.light.greyishBrown}
      darkColor={Colors.dark.greyishBrown}
      style={[
        props.style,
        {
          fontFamily: "ProximaNovaAlt-Semibold",
          fontSize: props?.fontSize || 16,
        },
      ]}
    />
  );
}
