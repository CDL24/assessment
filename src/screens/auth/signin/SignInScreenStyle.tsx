import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { ExtendedTheme } from "@react-navigation/native";
import fonts from "@fonts";
import { horizontalScale, moderateScale, verticalScale } from "@theme/metrix";

interface Style {
  container: ViewStyle;
  customInput: ViewStyle | TextStyle;
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
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    container: {
      flex: 1
    },
    customInput: {
      backgroundColor: "#f0f0f0",
      borderWidth: 1,
      borderColor: "#ddd",
      borderRadius: 8,
      padding: 12,
      fontSize: 18,
    },
    topText:{
      color: colors.primary, 
      fontSize: moderateScale(16), 
      paddingHorizontal: horizontalScale(8), 
      fontFamily: fonts.montserrat.regular
    },
    numberOfKText:{
      fontFamily: fonts.montserrat.bold
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
      gap: verticalScale(20),
      flex: 1,
      width: "100%",
      paddingTop: verticalScale(250),
      paddingBottom: verticalScale(50)
    },
    textTitle:{
      color: colors.secondaryWhite,
      fontSize: moderateScale(16),
      fontFamily: 'Montserrat-Black'
    },
    textSubTitle:{
      color: colors.secondaryWhite,
      fontSize: moderateScale(16)
    },
    btnContainer:{
      flex: 1,
      gap: verticalScale(16),
      width: "50%",
      marginTop: verticalScale(10)
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
      alignItems: "center"
    },
    imageBg:{
      height: "100%", 
      width: "100%"
    }
  });
};
