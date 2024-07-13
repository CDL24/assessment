
import React, { useCallback, useEffect, useMemo } from "react";
import { FlatList, View } from "react-native";
import createStyles, {  } from "./TrendingItemsStyle";
import { useTheme } from "@react-navigation/native";
import { translations } from "shared/localization";
import ListHeader from "@shared-components/ListHeader/ListHeader";
import { useCategoryData } from "hooks/useCategory";
import CategoryItem from "@shared-components/CategoryItem/CategoryItem";
import { ITEM_HEIGHT } from "@shared-components/CategoryItem/CategoryItemStyle";
import { Category } from "@services/models";

const TrendingItems: React.FC = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const {categoryData} = useCategoryData();

  useEffect(()=>{
    console.log('categoryData : ',categoryData)
  },[])
  const keyExtractor = (item: { idCategory: string; }) => item.idCategory;
  const renderItem = useCallback(({ item }: { item: Category }) => {
    return <CategoryItem cItem={item}/>
   }, []);
   const getItemLayout = useCallback((_data: ArrayLike<Category>| null | undefined, index: number) => {
      const dataItems = _data ?? [];  
      return {
          length: ITEM_HEIGHT,
          offset: ITEM_HEIGHT *  dataItems?.length,
          index,
        }; }, [] );

  return (
    <View style={styles.trendingContainer}>
        <ListHeader title={translations.trendingTitle} />
            <FlatList<Category>
                horizontal={true}
                data={categoryData}
                keyExtractor={keyExtractor} 
                showsHorizontalScrollIndicator={false}
                getItemLayout={getItemLayout}
                renderItem={renderItem}
            />
    </View>
  );
};

export default TrendingItems;
