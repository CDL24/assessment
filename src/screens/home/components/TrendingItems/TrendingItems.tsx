
import React, { useCallback, useMemo } from "react";
import { FlatList, Text, View } from "react-native";
import createStyles, {  } from "./TrendingItemsStyle";
import { useTheme } from "@react-navigation/native";
import { translations } from "shared/localization";
import ListHeader from "@shared-components/ListHeader/ListHeader";
import { useApi } from "hooks/useApi";
import CategoryItem from "@shared-components/CategoryItem/CategoryItem";
import { ITEM_HEIGHT } from "@shared-components/CategoryItem/CategoryItemStyle";
import { Category } from "@services/models";
import { END_POINT, KEYS } from "@shared-constants";

type Props = {
  showTitle?: boolean
  isHorizontal?: boolean
}
const TrendingItems: React.FC<Props> = ({showTitle = true, isHorizontal = true}) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const {isLoading, data} = useApi(KEYS.API_CATEGORIES, END_POINT.categories);

  const keyExtractor = (item: { idCategory: string; }) => item.idCategory;
  const renderItem = useCallback(({ item }: { item: Category }) => {
    return <CategoryItem cItem={item} isHorizontal={isHorizontal}/>
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
        {showTitle && <ListHeader title={translations.trendingTitle} />}
        { isLoading ? 
          (<View style={styles.loadingContainer}><Text style={styles.loadingText}>{translations.loading}</Text></View>)
          : data?.data?.categories && data?.data?.categories?.length && (<FlatList<Category>
            horizontal={isHorizontal}
            data={data?.data?.categories}
            keyExtractor={keyExtractor} 
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            getItemLayout={getItemLayout}
            renderItem={renderItem}
        />) }
    </View>
  );
};
export default React.memo(TrendingItems);
