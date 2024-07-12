import React, { useContext, useMemo } from "react";
import { View } from "react-native";
import createStyles from "./ProfileScreenStyle";
import { useTheme } from "@react-navigation/native";
import Button from "@shared-components/Button/Button";
import { AuthContext } from "context/AuthContext";
import * as NavigationService from "react-navigation-helpers";
import { SCREENS } from "@shared-constants";
import { Text } from "react-native";

const ProfileScreen: React.FC = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);
  const { signOut } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={{color: colors.text}}>Profile</Text>
      <Button
        title="Click"
        onPress={() => {
          signOut();
          NavigationService.navigate(SCREENS.SIGNIN);
        }}
      />
    </View>
  );
};

export default ProfileScreen;
