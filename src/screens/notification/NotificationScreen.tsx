import React, { useMemo } from "react";
import { View } from "react-native";
import createStyles from "./NotificationScreenStyle";
import { useTheme } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderTitle from "@shared-components/HeaderTitle/HeaderTitle";
import { translations } from "shared/localization";
import NotificationItem from "./components/NotificationItems/NotificationItem";

const Notifications: React.FC = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
          <HeaderTitle title={translations.notifications}/>
          <NotificationItem />
      </View>
    </SafeAreaView>
  );
};

export default Notifications;
