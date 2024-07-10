import { StyleSheet, TextStyle } from "react-native";
import { ExtendedTheme } from "@react-navigation/native";
import fonts from "@fonts";
import fontSize from "@font-size";

interface Style {
  text: TextStyle;
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    text: {
      fontSize: fontSize.font16,
      fontFamily: fonts.montserrat.medium, // Default font family
      color: colors.black,
    },
  });
};
