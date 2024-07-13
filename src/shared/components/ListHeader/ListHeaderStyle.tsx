import fontSize from "@font-size";
import fonts from "@fonts";
import { ExtendedTheme } from "@react-navigation/native";
import { horizontalScale, verticalScale } from "@theme/metrix";
import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from "react-native";

interface Style {
  container: ViewStyle;
  titleText: TextStyle;
  viewAll: ViewStyle;
  viewAllText: TextStyle;
}

export default (theme: ExtendedTheme) => {
    const { colors } = theme;
    return StyleSheet.create<Style>({
      container: {
        marginBottom: verticalScale(16),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
      },
      titleText: {
        color: colors.grey,
        fontFamily: fonts.poppins.bold,
        fontSize: fontSize.font20,
      },
      viewAll: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
      viewAllText: {
        marginRight: horizontalScale(5),
        color: colors.primary,
        fontFamily: fonts.poppins.regular,
        fontSize: fontSize.font14,
      }
    });
  };
  