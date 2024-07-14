import { StyleSheet, TextStyle, ViewStyle } from "react-native";
import { ExtendedTheme } from "@react-navigation/native";
import { horizontalScale, moderateScale, verticalScale } from "@theme/metrix";
import fontSize from "@font-size";
import fonts from "@fonts";

interface Style {
  container: ViewStyle;
  subContainer: ViewStyle;
  touchableBtn: ViewStyle;
  view: ViewStyle;
  row: ViewStyle;
  profileContainer: ViewStyle;
  btnStyle: ViewStyle;
  btnTextStyle: TextStyle;
  nameTextStyle: TextStyle;
  descTextStyle: TextStyle;
  divider: ViewStyle;
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
    },
    touchableBtn:{
      alignSelf: 'center', 
      marginHorizontal: horizontalScale(5),
      backgroundColor: colors.cardBackground,
      borderRadius: horizontalScale(16),
      padding: moderateScale(3)
    },
    view:{
      flex:1
    },
    row:{
      flexDirection: 'row'
    },
    profileContainer:{
      flexDirection: 'row', 
      alignItems: 'center',
      justifyContent: 'space-between',
      marginVertical: verticalScale(16)
    },
    btnStyle:{
      backgroundColor: colors.backgroundColor, 
      height: verticalScale(45)
    },
    btnTextStyle:{
      color: colors.primary, 
      fontSize: fontSize.font12
    },
    nameTextStyle:{
      color: colors.grey, 
      fontSize: fontSize.font20,
      fontFamily: fonts.poppins.bold,
      lineHeight: verticalScale(20)
    },
    descTextStyle:{
      color: colors.veryLightGrey, 
      fontSize: fontSize.font14,
      fontFamily: fonts.poppins.regular,
      lineHeight: verticalScale(20),
      marginTop: verticalScale(16)
    },
    divider:{
      backgroundColor: colors.secondaryGrey, 
      height: 1, 
      marginTop: verticalScale(10)
    }
  });
};
