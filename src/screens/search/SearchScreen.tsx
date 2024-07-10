import React, { useMemo } from "react";
import { View } from "react-native";
import createStyles from "./SearchScreen.style";
import { useTheme } from "@react-navigation/native";
import CustomText from "@shared-components/CustomText/CustomText";

const SearchScreen: React.FC = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={styles.container}>
      <CustomText color={colors.text}>Search</CustomText>
    </View>
  );
};

export default SearchScreen;
