import fontSize from "@font-size";
import fonts from "@fonts";
import { ExtendedTheme } from "@react-navigation/native";
import { StyleSheet, TextStyle, ViewStyle } from "react-native";

interface Style {
  noSavedItemsTextContainer: ViewStyle;
  noSavedItemsText: TextStyle;
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
      },
      noSavedItemsTextContainer:{
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center',
      },
      noSavedItemsText:{
        fontFamily: fonts.poppins.regular,
        fontSize: fontSize.font18,
        color: colors.grey
      }
    });
  };
  