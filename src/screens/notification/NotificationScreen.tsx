import React, { useMemo } from "react";
import { Text, View } from "react-native";
import createStyles from "./NotificationScreen.style";
import { useTheme } from "@react-navigation/native";

const ProfileScreen: React.FC = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <View style={styles.container}>
      <Text style={{color: colors.text}}>Notification</Text>
    </View>
  );
};

export default ProfileScreen;
