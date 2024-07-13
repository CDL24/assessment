import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { ScreenWidth } from "@freakycoder/react-native-helpers";
import { ExtendedTheme } from "@react-navigation/native";
import { horizontalScale, moderateScale, verticalScale } from "@theme/metrix";
import fonts from "@fonts";
import fontSize from "@font-size";

interface Style {
  container: ViewStyle;
  titleTextStyle: TextStyle;
  buttonStyle: ViewStyle;
  buttonTextStyle: TextStyle;
  header: ViewStyle;
  contentContainer: ViewStyle;
  listContainer: ViewStyle;
  customInput: ViewStyle | TextStyle;
  searchContainer: ViewStyle;
  searchIconContainer: ViewStyle;
  trendingContainer: ViewStyle;
  loadingContainer: ViewStyle;
  loadingText: TextStyle;
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
    titleTextStyle: {
      fontSize: 32,
    },
    buttonStyle: {
      height: 45,
      width: ScreenWidth * 0.9,
      marginTop: 32,
      borderRadius: 12,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: colors.primary,
      shadowRadius: 5,
      shadowOpacity: 0.7,
      shadowColor: colors.shadow,
      shadowOffset: {
        width: 0,
        height: 3,
      },
    },
    buttonTextStyle: {
      color: colors.white,
      fontWeight: "700",
    },
    header: {
      width: ScreenWidth * 0.9,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    contentContainer: {
      flex: 1,
      marginTop: 16,
    },
    listContainer: {
      marginTop: 8,
    },
    customInput: {
      flex: 1,
      backgroundColor: colors.white,
      borderWidth: 1,
      borderColor: colors.secondaryGrey,
      borderRadius: 8,
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
    },
    loadingContainer:{
      justifyContent: 'center', 
      alignItems: 'center'
    },
    loadingText:{
      fontSize: fontSize.font18,
      fontFamily: fonts.poppins.light
    }
  });
};

