import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, View as RNView } from "react-native";
import { BlurView } from "expo-blur";

import { Text, View } from "../components/Themed";
import Colors from "../constants/Colors";
import { useCards } from "../hooks/useCards";
import { AddFoodStyleCard } from "../components/AddFoodStyleCard";
import { FoodStyleCard } from "../components/FoodStyleCard";

export default function HomeScreen() {
  const { data } = useCards();
  const [listData, setListData] = useState(data);

  useEffect(() => {
    setListData(data);
  }, [data]);

  return (
    <RNView style={styles.container}>
      <BlurView style={styles.overlayStyle} />
      <LinearGradient
        colors={[Colors.light.maize, Colors.light.orangish]}
        style={styles.gradient}
        start={{ x: 1, y: 0.5 }}
        end={{ x: 0, y: 0.5 }}
      />
      <ScrollView
        style={styles.list}
        contentContainerStyle={{ paddingBottom: 250 }}
      >
        {(listData || []).map((i) => (
          <FoodStyleCard
            key={i.id}
            name={i.name}
            id={i.id}
            setListData={setListData}
            listData={listData}
          />
        ))}
      </ScrollView>
      <View style={styles.bottomBar} />
      <AddFoodStyleCard />
    </RNView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  overlayStyle: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    zIndex: 1,
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
  list: {
    paddingTop: 150,
    zIndex: 5,
  },
  gradient: {
    width: "100%",
    height: 200,
    position: "absolute",
  },
});
