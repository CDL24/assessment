import React, { useMemo } from "react";
import { View } from "react-native";
import createStyles from "./NotificationScreen.style";
import { useTheme } from "@react-navigation/native";
import CustomText from "@shared-components/CustomText/CustomText";

const ProfileScreen: React.FC = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={styles.container}>
      <CustomText  color={colors.text}>
        Notification
      </CustomText>
    </View>
  );
};

export default ProfileScreen;
