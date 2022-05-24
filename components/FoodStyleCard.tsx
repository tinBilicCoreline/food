import { BlurView } from "expo-blur";
import React, { useCallback, useState } from "react";
import {
  Pressable,
  Image,
  StyleSheet,
  Modal,
  View,
  Text,
  Alert,
  Share,
} from "react-native";
import Colors from "../constants/Colors";
import { useCards } from "../hooks/useCards";
import {
  ProximaSemiBoldGrayishBrown,
  ProximaSemiBoldWhite,
} from "./StyledText";

export const FoodStyleCard = ({ name, id, setListData, listData }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const { deleteCardRequest, shareCardRequest, duplicateCardRequest } =
    useCards(true);

  const handleDuplicate = useCallback(async () => {
    //API call
    const { duplicateCard } = await duplicateCardRequest({ id });

    //insert the card at the end of the existing list
    setListData([...listData, duplicateCard]);

    setModalVisible(false);
  }, [duplicateCardRequest, id, listData, setListData]);

  const handleShare = useCallback(async () => {
    const { shareCard } = await shareCardRequest({ id });
    try {
      const result = await Share.share({
        message: name,
        url: `https://cards.foodstyles.com/${shareCard}`,
      });

      if (result.action === Share.sharedAction) {
        setModalVisible(false);
      } else if (result.action === Share.dismissedAction) {
        setModalVisible(false);
      }
    } catch (error) {
      alert(error.message);
    }
  }, [id, name, shareCardRequest]);

  const handleDelete = useCallback(async () => {
    Alert.alert(
      "Confirm delete",
      `This will delete ${name} and all its settings`,
      [
        {
          onPress: async () => {
            //API call
            await deleteCardRequest({ id });

            //remove the card from the list
            const filteredList = listData.filter((i) => i.id !== id);
            setListData(filteredList);

            setModalVisible(false);
          },
          text: "Delete",
          style: "destructive",
        },
        { text: "Cancel" },
      ]
    );
  }, [deleteCardRequest, id, listData, name, setListData]);

  return (
    <>
      <View style={styles.container}>
        <ProximaSemiBoldGrayishBrown fontSize={18} numberOfLines={3}>
          {name}
        </ProximaSemiBoldGrayishBrown>
        <Pressable onPress={() => setModalVisible(true)}>
          <Image source={require("../assets/icons/options.png")} />
        </Pressable>
      </View>
      <Modal animationType="fade" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <BlurView style={styles.overlayStyle} intensity={50} tint="light" />
          <View style={styles.container}>
            <ProximaSemiBoldGrayishBrown fontSize={18} numberOfLines={3}>
              {name}
            </ProximaSemiBoldGrayishBrown>
            <Pressable onPress={() => setModalVisible(false)}>
              <Image source={require("../assets/icons/close.png")} />
            </Pressable>
          </View>
          <View style={styles.iconContainer}>
            <Pressable style={styles.iconRow} onPress={handleShare}>
              <ProximaSemiBoldWhite>Share</ProximaSemiBoldWhite>
              <Image source={require("../assets/icons/share.png")} />
            </Pressable>
            <Pressable style={styles.iconRow} onPress={handleDuplicate}>
              <ProximaSemiBoldWhite>Duplicate</ProximaSemiBoldWhite>
              <Image source={require("../assets/icons/duplicate.png")} />
            </Pressable>
            <Pressable style={styles.iconRow} onPress={handleDelete}>
              <ProximaSemiBoldWhite>Delete</ProximaSemiBoldWhite>
              <Image source={require("../assets/icons/delete.png")} />
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 18,
    flexDirection: "row",
    backgroundColor: Colors.light.white,
    borderRadius: 6,
    shadowColor: "#b0b0b066",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 7,
    zIndex: 2,
    shadowOpacity: 1,
    alignItems: "center",
    marginHorizontal: 18,
    justifyContent: "space-between",
    marginBottom: 6,
  },
  iconContainer: {
    zIndex: 2,
  },
  iconRow: {
    flexDirection: "row",
    alignSelf: "flex-end",
    alignItems: "center",
    marginRight: 22,
  },
  centeredView: {
    flex: 1,
    zIndex: 1,
    justifyContent: "center",
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
});
