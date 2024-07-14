import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { ExtendedTheme } from "@react-navigation/native";
import fonts from "@fonts";
import { horizontalScale, moderateScale, verticalScale } from "@theme/metrix";

export const ICON_HEIGHT = moderateScale(20)
export const ICON_WIDTH = moderateScale(20)

interface Style {
  container: ViewStyle;
  topText: TextStyle;
  numberOfKText: TextStyle;
  bottomViewLinear: ViewStyle;
  bottomContainer: ViewStyle;
  textTitle: TextStyle;
  textSubTitle: TextStyle;
  btnContainer: ViewStyle;
  btnStyle: ViewStyle;
  btnTitleStyle: TextStyle;
  topTitleContainer: ViewStyle;
  imageBg: ImageStyle;
  imgView: ViewStyle;
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    container: {
      flex: 1
    },
    topText:{
      color: colors.primary, 
      fontSize: moderateScale(16), 
      paddingHorizontal: horizontalScale(8), 
      fontFamily: fonts.poppins.regular
    },
    numberOfKText:{
      fontFamily: fonts.poppins.bold,
      fontSize: moderateScale(16),
    },
    bottomViewLinear:{
      flex: 1,
      bottom: 0,
      width: "100%",
      position: "absolute",
      justifyContent: "center",
      alignItems: "center"
    },
    bottomContainer:{
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
      width: "100%",
      paddingTop: verticalScale(250),
      paddingBottom: verticalScale(50)
    },
    textTitle:{
      color: colors.secondaryWhite,
      fontSize: moderateScale(56),
      fontFamily: fonts.poppins.bold
    },
    textSubTitle:{
      color: colors.secondaryWhite,
      fontSize: moderateScale(16),
      fontFamily: fonts.poppins.regular
    },
    btnContainer:{
      flex: 1,
      gap: verticalScale(16),
      width: "50%",
      marginTop: verticalScale(30)
    },
    btnStyle:{
      backgroundColor: colors.secondaryWhite
    },
    btnTitleStyle:{
      color: colors.primary
    },
    topTitleContainer:{
      flex: 1,
      marginTop: verticalScale(50),
      flexDirection: "row",
      position: "absolute",
      alignSelf: "center",
      alignItems: "center",
    },
    imageBg:{
      height: "100%", 
      width: "100%"
    },
    imgView:{
      alignContent: 'center', 
      bottom: verticalScale(2)
    }
  });
};
