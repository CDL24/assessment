import React, { useMemo } from "react";
import { Text, View } from "react-native";
import createStyles from "./SearchScreen.style";
import { useTheme } from "@react-navigation/native";

const SearchScreen: React.FC = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={styles.container}>
      <Text style={{color: colors.text}}>Search</Text>
    </View>
  );
};

export default SearchScreen;
