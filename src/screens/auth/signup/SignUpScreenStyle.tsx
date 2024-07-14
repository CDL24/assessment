import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";
import { ExtendedTheme } from "@react-navigation/native";
import { moderateScale, verticalScale } from "@theme/metrix";
import fontSize from "@font-size";
import fonts from "@fonts";

interface Style {
  container: ViewStyle;
  customInput: ViewStyle | TextStyle;
  imageBg: ImageStyle;
  bottomViewLinear: ViewStyle;
  subContainer: ViewStyle;
  label: TextStyle;
  btnStyle: ViewStyle;
  btnDisableStyle: ViewStyle;
  error: TextStyle;
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    container: {
      flex: 1
    },
    text: {
      fontSize: moderateScale(10),
    },
    customInput: {
      backgroundColor: colors.inputBg,
      borderWidth: 1,
      borderColor: colors.inputBorder,
      borderRadius: moderateScale(8),
      padding: moderateScale(12),
      fontSize: moderateScale(18),
    },
    imageBg:{
      height: "100%", 
      width: "100%"
    },
    bottomViewLinear:{
      flex: 1,
      position: "absolute",
      width: "100%",
      height: "100%",
    },
    subContainer:{
      flex: 1,
      marginTop: verticalScale(100),
      left: verticalScale(25),
      position: "absolute",
      width: "85%"
    },
    label:{
      color: colors.secondaryWhite,
      fontSize: fontSize.font16,
      fontWeight: '600',
      marginBottom: verticalScale(5),
      fontFamily: fonts.poppins.regular
    },
    btnStyle:{
      marginTop: verticalScale(16)
    },
    btnDisableStyle:{
      marginTop: verticalScale(16),
      backgroundColor: colors.disableBtn
    },
    error:{
      color: colors.error,
      fontSize: moderateScale(14),
    }
  });
};
