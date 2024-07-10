/**
 * ? Local Imports
 */
import React, { useMemo } from "react";
import { View } from "react-native";
import * as NavigationService from "react-navigation-helpers";
import createStyles from "./DetailScreen.style";
import { useTheme } from "@react-navigation/native";
import CustomText from "@shared-components/CustomText/CustomText";
import { TouchableOpacity } from "react-native-gesture-handler";

interface DetailScreenProps {}

const DetailScreen: React.FC<DetailScreenProps> = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={styles.container}>
      <CustomText color={colors.text}>
        Detail Screen
      </CustomText>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => NavigationService.goBack()}
      >
        <CustomText color={colors.white}>Go back to Home</CustomText>
      </TouchableOpacity>
    </View>
  );
};

export default DetailScreen;
