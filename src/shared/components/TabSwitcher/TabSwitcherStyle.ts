import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { ExtendedTheme } from "@react-navigation/native";
import { moderateScale, verticalScale } from "@theme/metrix";
import fonts from "@fonts";
import fontSize from "@font-size";

interface Style {
  container: ViewStyle;
  tab: ViewStyle;
  activeTab: ViewStyle;
  tabText: TextStyle;
  tabTextActive: TextStyle;
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: verticalScale(20),
    },
    tab: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: verticalScale(8),
      borderRadius: moderateScale(10)
    },
    activeTab: {
      backgroundColor: colors.primary,
      borderRadius: moderateScale(10),
    },
    tabText: {
      fontSize: fontSize.font12,
      fontFamily: fonts.poppins.bold,
      color: colors.primary,
    },
    tabTextActive: {
      fontSize: fontSize.font12,
      fontFamily: fonts.poppins.bold,
      color: colors.white,
    }
  });
};
