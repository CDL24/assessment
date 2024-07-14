import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { ScreenWidth } from "@freakycoder/react-native-helpers";
import { ExtendedTheme } from "@react-navigation/native";
import { horizontalScale, moderateScale, verticalScale } from "@theme/metrix";
import fonts from "@fonts";

interface Style {
  container: ViewStyle;
  header: ViewStyle;
  contentContainer: ViewStyle;
  listContainer: ViewStyle;
  customInput: ViewStyle | TextStyle;
  searchContainer: ViewStyle;
  searchIconContainer: ViewStyle;
  trendingContainer: ViewStyle;
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
    header: {
      width: ScreenWidth * 0.9,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    contentContainer: {
      flex: 1,
      marginTop: verticalScale(16),
    },
    listContainer: {
      marginTop: verticalScale(8),
    },
    customInput: {
      flex: 1,
      backgroundColor: colors.white,
      borderWidth: 1,
      borderColor: colors.secondaryGrey,
      borderRadius: moderateScale(8),
      fontFamily: fonts.poppins.regular,
      fontSize: moderateScale(14),
      paddingLeft: horizontalScale(36),
      justifyContent: 'center',
      alignItems: 'center'
    },
    searchContainer:{
      flexDirection:'row',
      alignItems:'center'
    },
    searchIconContainer:{
      position: 'absolute',
      zIndex: 1,
      left: horizontalScale(10), 
      top: verticalScale(12)
    },
    trendingContainer: {
      marginHorizontal: horizontalScale(8),
      marginTop: verticalScale(8)
    }
  });
};

