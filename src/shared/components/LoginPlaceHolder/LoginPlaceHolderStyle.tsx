import fontSize from "@font-size";
import fonts from "@fonts";
import { ScreenWidth } from "@freakycoder/react-native-helpers";
import { ExtendedTheme } from "@react-navigation/native";
import { horizontalScale, verticalScale } from "@theme/metrix";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";

interface Style {
  placeholderContainer: ViewStyle;
  loginBtnStyle: ViewStyle;
  placeHolderTextStyle: TextStyle;
}

export default (theme: ExtendedTheme) => {
    return StyleSheet.create<Style>({
      placeholderContainer: {
        flex: 1, 
        gap: verticalScale(16), 
        marginHorizontal: horizontalScale(16),
        marginVertical: verticalScale(10),
        justifyContent: 'center',
        alignItems: 'center'
      },
      loginBtnStyle:{
        width: ScreenWidth/2
      },
      placeHolderTextStyle:{
        fontFamily: fonts.poppins.regular,
        fontSize: fontSize.font18
      }
    });
  };
  