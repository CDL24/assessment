/**
 * ? Local Imports
 */
import React, { useMemo } from "react";
import { Text, View } from "react-native";
import * as NavigationService from "react-navigation-helpers";
import createStyles from "./DetailScreen.style";
import { useTheme } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

interface DetailScreenProps {}

const DetailScreen: React.FC<DetailScreenProps> = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={styles.container}>
      <Text style={{color: colors.text}}>Detail Screen</Text>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => NavigationService.goBack()}
      >
        <Text style={{color: colors.white}}>Go back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailScreen;
