import type { ViewStyle } from "react-native";
import { StyleSheet } from "react-native";
import type { ExtendedTheme } from "@react-navigation/native";
import { horizontalScale, verticalScale } from "@theme/metrix";

interface Style {
  container: ViewStyle;
  subContainer: ViewStyle;
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    subContainer: {
      flex: 1, 
      gap: verticalScale(10), 
      marginHorizontal: horizontalScale(16),
      marginVertical: verticalScale(10)
    }
  });
};
