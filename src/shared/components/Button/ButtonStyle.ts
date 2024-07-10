import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { ExtendedTheme } from "@react-navigation/native";

interface Style {
  button: ViewStyle;
  title: TextStyle;
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    button: {
      backgroundColor: colors.primary,
      paddingVertical: 16,
      paddingHorizontal: 20,
      borderRadius: 5,
      alignItems: "center",
    },
    title: {
      fontSize: 16,
      color: colors.white,
      fontWeight: "bold",
      justifyContent: "center",
      alignItems: "center",
    },
  });
};
