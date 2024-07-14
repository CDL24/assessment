import fontSize from "@font-size";
import fonts from "@fonts";
import { ExtendedTheme } from "@react-navigation/native";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";

interface Style {
  loadingContainer: ViewStyle;
  loadingText: TextStyle;
}

export default (theme: ExtendedTheme) => {
    const { colors } = theme;
    return StyleSheet.create<Style>({
      loadingContainer:{
        justifyContent: 'center', 
        alignItems: 'center'
      },
      loadingText:{
        fontSize: fontSize.font18,
        fontFamily: fonts.poppins.light,
        color: colors.veryLightGrey
      }
    });
  };
  