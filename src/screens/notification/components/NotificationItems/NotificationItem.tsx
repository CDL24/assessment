import React, { useMemo } from "react";
import { Text, View } from "react-native";
import createStyles from "./NotificationItemStyle";
import { useTheme } from "@react-navigation/native";
import NOTIFY from "assets/images/notify.svg";
import notification from "../../../../services/mock/notification-mock.json";
import { translations } from "shared/localization";

const NotificationItem: React.FC = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const {subContainer, innerContainer, subViewRow, notificationTitle, timeTitle, description, allSetText} = styles;


  return (
      <View style={subContainer}>
          <Text style={timeTitle}>{translations.today}</Text>
          {
            notification.map((item)=><View style={innerContainer}>
            <NOTIFY />
            <View style={subViewRow}>
              <Text style={notificationTitle}>{item.title}</Text>
              <Text style={description}>{item.description}</Text>
            </View>
          </View>)
          }
          <Text style={allSetText}>{translations.allSet}</Text>
      </View>
  );
};

export default React.memo(NotificationItem);
