import React, { useMemo } from "react";
import { View } from "react-native";
import createStyles from "./BookmarkScreenStyle";
import { useTheme } from "@react-navigation/native";
import HeaderTitle from "@shared-components/HeaderTitle/HeaderTitle";
import { translations } from "shared/localization";
import { SafeAreaView } from "react-native-safe-area-context";
import TabSwitcher from "@shared-components/TabSwitcher/TabSwitcher";
import TrendingItems from "@screens/home/components/TrendingItems/TrendingItems";

const BookmarkScreen: React.FC = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
          <HeaderTitle title={translations.savedRecipe}/>
          <TabSwitcher tab1={translations.tabVideos} tab2={translations.tabRecipies}/>
          <TrendingItems showTitle={false} isHorizontal={false}/>
      </View>
    </SafeAreaView>
  );
};

export default BookmarkScreen;
