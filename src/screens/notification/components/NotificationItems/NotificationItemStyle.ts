import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { ExtendedTheme } from "@react-navigation/native";
import { horizontalScale, moderateScale, verticalScale } from "@theme/metrix";
import fonts from "@fonts";
import fontSize from "@font-size";

interface Style {
  container: ViewStyle;
  subContainer: ViewStyle;
  innerContainer: ViewStyle;
  subViewRow: ViewStyle;
  notificationTitle: TextStyle;
  description: TextStyle;
  timeTitle: TextStyle;
  allSetText: TextStyle;
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    container: {
      flex: 1,
      backgroundColor: colors.background,
      alignItems: "center",
      justifyContent: "center",
    },
    subContainer: {
      flex: 1, 
      gap: verticalScale(10), 
      marginHorizontal: horizontalScale(16),
      marginVertical: verticalScale(10)
    },
    innerContainer:{
      flexDirection: 'row', 
      backgroundColor: colors.secondaryWhite, 
      padding: moderateScale(10), 
      borderRadius: moderateScale(8)
    },
    subViewRow:{
      flex: 1, 
      marginHorizontal: horizontalScale(10)
    },
    notificationTitle:{
      fontFamily: fonts.poppins.bold,
      fontSize: fontSize.font12,
      color: colors.notificationTitle
    },
    description:{
      fontFamily: fonts.poppins.regular,
      fontSize: fontSize.font12,
      color: colors.veryLightGrey
    },
    timeTitle:{
      fontFamily: fonts.poppins.bold,
      fontSize: fontSize.font14,
      color: colors.grey
    },
    allSetText:{
      fontFamily: fonts.poppins.regular,
      fontSize: fontSize.font10,
      color: colors.veryLightGrey,
      textAlign: 'center'
    },
  });
};
