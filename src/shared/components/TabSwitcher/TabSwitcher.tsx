import React, { useMemo, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTheme } from "@react-navigation/native";
import createStyles from "./TabSwitcherStyle";

type Props = {
  tab1: string;
  tab2: string;
}
const TabSwitcher: React.FC<Props> = ({tab1, tab2}) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const [activeTab, setActiveTab] = useState<number>(1);

  const handleTabPress = (tabIndex: number) => {
    setActiveTab(tabIndex);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.tab, activeTab === 1 ? styles.activeTab : null]}
        onPress={() => handleTabPress(1)}
        testID='Tab1'
      >
        <Text style={activeTab === 1 ? styles.tabTextActive : styles.tabText}>{tab1}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 2 ? styles.activeTab : null]}
        onPress={() => handleTabPress(2)}
        testID='Tab2'
      >
        <Text style={activeTab === 2 ? styles.tabTextActive : styles.tabText}>{tab2}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default TabSwitcher;
