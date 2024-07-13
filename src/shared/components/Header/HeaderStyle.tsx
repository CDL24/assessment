import { ScreenWidth } from "@freakycoder/react-native-helpers";
import { ExtendedTheme } from "@react-navigation/native";
import { verticalScale } from "@theme/metrix";
import { StyleSheet, ViewStyle } from "react-native";

interface Style {
    header: ViewStyle;
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
      }
    });
  };
  