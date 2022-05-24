import { persistentAtom } from "recoil-persistence/react-native";

export const loginStateAtom = persistentAtom({
  key: "loginStateAtom",
  default: {
    token: null,
    user: null,
  },
});
