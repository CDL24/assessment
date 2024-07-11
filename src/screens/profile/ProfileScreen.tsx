import React, { useContext, useMemo } from "react";
import { View } from "react-native";
import createStyles from "./ProfileScreenStyle";
import { useTheme } from "@react-navigation/native";
import CustomText from "@shared-components/CustomText/CustomText";
import Button from "@shared-components/Button/Button";
import { AuthContext } from "context/AuthContext";
import * as NavigationService from "react-navigation-helpers";
import { SCREENS } from "@shared-constants";

const ProfileScreen: React.FC = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);
  const {signOut} = useContext(AuthContext)
 
  return (
    <View style={styles.container}>
      <CustomText color={colors.text}>Profile</CustomText>
      <Button title="Click" onPress={() => {
        signOut()
        NavigationService.navigate(SCREENS.SIGNIN)
      }} />
    </View>
  );
};

export default ProfileScreen;
