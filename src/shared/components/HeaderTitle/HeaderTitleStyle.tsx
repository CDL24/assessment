import fonts from "@fonts";
import { ScreenWidth } from "@freakycoder/react-native-helpers";
import { ExtendedTheme } from "@react-navigation/native";
import { moderateScale, verticalScale } from "@theme/metrix";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";

interface Style {
    header: ViewStyle;
    title: TextStyle;
}

export default (theme: ExtendedTheme) => {
    const { colors } = theme;
    return StyleSheet.create<Style>({
      header: {
        width: ScreenWidth * 0.9,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: verticalScale(16)
      },
      title:{
        fontSize: moderateScale(24), 
        fontFamily: fonts.poppins.bold, 
        color: colors.grey
      }
    });
  };
  