
import React, { useCallback, useMemo } from "react";
import { FlatList, View } from "react-native";
import createStyles, {  } from "./RecentItemsStyle";
import { useTheme } from "@react-navigation/native";
import { translations } from "shared/localization";
import ListHeader from "@shared-components/ListHeader/ListHeader";
import { ITEM_HEIGHT } from "@shared-components/CategoryItem/CategoryItemStyle";
import { Meal } from "@services/models";
import { useRecentMealData } from "hooks/useRecentRecipe";
import RecentRecipeItem from "@shared-components/RecentRecipe/RecentRecipe";

const RecentItems: React.FC = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const {mealData} = useRecentMealData();
  
  const keyExtractor = (item: { idMeal: string; }) => item.idMeal;
  const renderItem = useCallback(({ item }: { item: Meal }) => {
    return <RecentRecipeItem cItem={item}/>
   }, []);
   const getItemLayout = useCallback((_data: ArrayLike<Meal>| null | undefined, index: number) => {
      const dataItems = _data ?? [];  
      return {
          length: ITEM_HEIGHT,
          offset: ITEM_HEIGHT *  dataItems?.length,
          index,
        }; }, [] );

  return (
    <View style={styles.trendingContainer}>
        <ListHeader title={translations.recentTitle} />
            <FlatList<Meal>
                horizontal={true}
                data={mealData}
                keyExtractor={keyExtractor} 
                showsHorizontalScrollIndicator={false}
                getItemLayout={getItemLayout}
                renderItem={renderItem}
            />
    </View>
  );
};

export default RecentItems;
