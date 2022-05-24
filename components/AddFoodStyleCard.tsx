import { BlurView } from "expo-blur";
import React, { useState } from "react";
import {
  Pressable,
  Image,
  StyleSheet,
  Modal,
  View,
  Text,
  TextInput,
} from "react-native";
import Colors from "../constants/Colors";
import { useCards } from "../hooks/useCards";
import { ProximaSemiBoldGrayishBrown } from "./StyledText";

export const AddFoodStyleCard = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setName] = useState("");
  const { createCardRequest } = useCards();

  const handleCreateCard = async () => {
    if (name.length > 0) {
      await createCardRequest({ name });
    }
    setModalVisible(false);
    setName("");
  };

  return (
    <>
      <Pressable style={styles.container} onPress={() => setModalVisible(true)}>
        <Image
          source={require("../assets/icons/add.png")}
          style={{ marginRight: 10 }}
        />
        <ProximaSemiBoldGrayishBrown fontSize={18}>
          New Food Style
        </ProximaSemiBoldGrayishBrown>
      </Pressable>
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <BlurView style={styles.overlayStyle} intensity={10} tint="light" />
          <View style={styles.container}>
            <TextInput
              onChangeText={setName}
              value={name}
              autoFocus
              selectionColor={Colors.light.orangish}
              style={styles.textInput}
            />
            <Pressable onPress={handleCreateCard}>
              <Image source={require("../assets/icons/add.png")} />
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    flexDirection: "row",
    backgroundColor: Colors.light.white,
    borderRadius: 6,
    shadowColor: "#b0b0b066",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    zIndex: 6,
    shadowRadius: 7,
    shadowOpacity: 1,
    alignItems: "center",
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    marginHorizontal: 18,
    justifyContent: "flex-start",
  },
  textInput: { height: 35, flex: 1 },
  centeredView: {
    flex: 1,
    zIndex: 2,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    zIndex: 2,

    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  overlayStyle: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    zIndex: 1,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
