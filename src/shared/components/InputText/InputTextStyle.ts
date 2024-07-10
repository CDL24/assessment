import { StyleSheet, TextStyle } from "react-native";
import { ExtendedTheme } from "@react-navigation/native";
import fonts from "@fonts";
import fontSize from "@font-size";

interface Style {
  input: TextStyle;
}

export default (theme: ExtendedTheme) => {
  const { colors } = theme;
  return StyleSheet.create<Style>({
    input: {
      height: 'auto',
      borderColor: '#ddd',
      borderWidth: 1,
      borderRadius: 5,
      paddingHorizontal: 10,
      marginBottom: 10,
      fontSize: fontSize.font16,
      color: '#333',
    },
  });
};