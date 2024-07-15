
import React, { useCallback, useMemo } from "react";
import { FlatList, View } from "react-native";
import createStyles, {  } from "./TrendingItemsStyle";
import { useTheme } from "@react-navigation/native";
import { translations } from "shared/localization";
import ListHeader from "@shared-components/ListHeader/ListHeader";
import { useApi } from "hooks/useApi";
import CategoryItem from "@shared-components/CategoryItem/CategoryItem";
import { ITEM_HEIGHT } from "@shared-components/CategoryItem/CategoryItemStyle";
import { Category } from "@services/models";
import { END_POINT, KEYS } from "@shared-constants";
import LoadingPlaceholder from "@shared-components/LoadingPlaceholder/LoadingPlaceholder";
import { useAppDispatch } from "hooks";
import { addBookmark } from "redux/slices/bookmark";

type Props = {
  showTitle?: boolean
  isHorizontal?: boolean
}
const TrendingItems: React.FC<Props> = ({showTitle = true, isHorizontal = true}) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const {isLoading, data} = useApi(KEYS.API_CATEGORIES, END_POINT.categories);
  const dispatch = useAppDispatch();
  
  const keyExtractor = (item: { idCategory: string; }) => item.idCategory;
  const renderItem = useCallback(({ item }: { item: Category }) => {
    return <CategoryItem cItem={item} isHorizontal={isHorizontal} onBookmark={()=> {
      dispatch(addBookmark(item))
    }}/>
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
          (<LoadingPlaceholder />)
          : data?.data?.categories && data?.data?.categories?.length && (
              <FlatList<Category>
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
