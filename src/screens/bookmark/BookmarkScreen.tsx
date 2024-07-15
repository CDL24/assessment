import React, { useMemo } from "react";
import { View } from "react-native";
import createStyles from "./BookmarkScreenStyle";
import { useTheme } from "@react-navigation/native";
import HeaderTitle from "@shared-components/HeaderTitle/HeaderTitle";
import { translations } from "shared/localization";
import { SafeAreaView } from "react-native-safe-area-context";
import BookmarkItems from "@screens/home/components/BookmarkItems/BookmarkItems";

const BookmarkScreen: React.FC = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <HeaderTitle title={translations.savedRecipe}/>
          <BookmarkItems />
      </View>
    </SafeAreaView>
  );
};

export default BookmarkScreen;
