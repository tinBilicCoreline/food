import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Image, Pressable } from "react-native";
import { useRecoilValue } from "recoil";
import Colors from "../constants/Colors";
import HomeScreen from "../screens/HomeScreen";
import { LandingScreen } from "../screens/LandingScreen";
import LoginScreen from "../screens/LoginScreen";
import ProfileScreen from "../screens/ProfileScreen";
import RegisterScreen from "../screens/RegisterScreen";
import { loginStateAtom } from "../state/state";
import { RootStackParamList } from "../types";
import LinkingConfiguration from "./LinkingConfiguration";

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const loginStateValue = useRecoilValue(loginStateAtom);

  return (
    <Stack.Navigator>
      {loginStateValue.token !== null ? (
        <Stack.Screen
          name="authorised-nav"
          component={AuthNavigator}
          options={{ headerShown: false }}
        />
      ) : (
        <Stack.Screen
          name="unauthorised-nav"
          component={UnauthNavigator}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
}

function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTintColor: Colors.light.greyishBrown,
        headerTitleStyle: {
          fontFamily: "ProximaNovaAlt-Bold",
          fontSize: 20,
          fontWeight: "bold",
          color: Colors.light.white,
        },
      }}
    >
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={({ navigation }) => ({
          title: "",
          headerLeft: () => (
            <Image
              source={require("../assets/icons/logo.png")}
              style={{ width: 30, height: 30 }}
            />
          ),
          headerRight: () => (
            <Pressable onPress={() => navigation.navigate("profile")}>
              <Image
                source={require("../assets/icons/profile.png")}
                style={{ width: 35, height: 35 }}
              />
            </Pressable>
          ),
        })}
      />
      <Stack.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          title: "Profile",
          headerTitleStyle: { color: Colors.light.greyishBrown },
          headerTitleAlign: "left",
        }}
      />
    </Stack.Navigator>
  );
}

function UnauthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerTintColor: Colors.light.greyishBrown,
        headerBackTitleVisible: false,
        headerTitleStyle: {
          fontFamily: "ProximaNovaAlt-Bold",
          fontSize: 20,
          fontWeight: "bold",
          color: Colors.light.white,
        },
      }}
    >
      <Stack.Screen
        name="landing"
        component={LandingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="login"
        component={LoginScreen}
        options={{ title: "Log in" }}
      />
      <Stack.Screen
        name="register"
        component={RegisterScreen}
        options={{ title: "Sign up with Email" }}
      />
    </Stack.Navigator>
  );
}
