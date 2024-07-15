import { StyleSheet, ViewStyle } from "react-native";
import { ExtendedTheme } from "@react-navigation/native";
import { horizontalScale, moderateScale, verticalScale } from "@theme/metrix";

interface Style {
  container: ViewStyle;
  trendingContainer: ViewStyle;
  containerStyle: ViewStyle;
}

export const ICON_HEIGHT = moderateScale(20)
export const ICON_WIDTH = moderateScale(20)

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    trendingContainer: {
      flex:1,
      marginHorizontal: horizontalScale(8),
      marginTop: verticalScale(8)
    },
    containerStyle:{
      marginTop: verticalScale(16)
    }
  });
};

