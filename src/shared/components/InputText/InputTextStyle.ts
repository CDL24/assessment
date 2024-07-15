import { StyleSheet, TextStyle } from "react-native";
import { ExtendedTheme } from "@react-navigation/native";
import fontSize from "@font-size";
import { horizontalScale, moderateScale, verticalScale } from "@theme/metrix";

interface Style {
  input: TextStyle;
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    input: {
      height: "auto",
      borderColor: colors.inputBorder,
      borderWidth: 1,
      borderRadius: moderateScale(5),
      paddingHorizontal: horizontalScale(10),
      marginBottom: verticalScale(10),
      fontSize: fontSize.font16,
    },
  });
};
