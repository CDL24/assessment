import React, { useMemo, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTheme } from "@react-navigation/native";
import createStyles from "./TabSwitcherStyle";

const TabSwitcher: React.FC = () => {
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
      >
        <Text style={activeTab === 1 ? styles.tabTextActive : styles.tabText}>Tab 1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.tab, activeTab === 2 ? styles.activeTab : null]}
        onPress={() => handleTabPress(2)}
      >
        <Text style={activeTab === 2 ? styles.tabTextActive : styles.tabText}>Tab 2</Text>
      </TouchableOpacity>
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 20,
//   },
//   tab: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingVertical: 8,
//     borderRadius: 8
//   },
//   activeTab: {
//     backgroundColor: 'pink',
//     borderRadius: 8,
//   },
//   tabText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   tabTextActive: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: '#FFF',
//   },
// });

export default TabSwitcher;
