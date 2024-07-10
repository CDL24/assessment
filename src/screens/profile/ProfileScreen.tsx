import React, { useMemo } from "react";
import { View } from "react-native";
import createStyles from "./ProfileScreenStyle";
import { useTheme } from "@react-navigation/native";
import CustomText from "@shared-components/CustomText/CustomText";
import Button from "@shared-components/Button/Button";

const ProfileScreen: React.FC = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={styles.container}>
      <CustomText color={colors.text}>Profile</CustomText>
      <Button title="Click" onPress={() => console.log("clicked")} />
    </View>
  );
};

export default ProfileScreen;
