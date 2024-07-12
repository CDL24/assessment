import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { ExtendedTheme } from "@react-navigation/native";
import { horizontalScale, moderateScale, verticalScale } from "@theme/metrix";
import fonts from "@fonts";

interface Style {
  button: ViewStyle;
  title: TextStyle;
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    button: {
      backgroundColor: colors.primary,
      paddingVertical: verticalScale(14),
      paddingHorizontal: horizontalScale(20),
      borderRadius: 8,
      alignItems: "center",
      borderColor: colors.primary,
      borderWidth:1
    },
    title: {
      fontSize: moderateScale(16),
      color: colors.white,
      fontWeight: "600",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: fonts.poppins.bold
    },
  });
};
