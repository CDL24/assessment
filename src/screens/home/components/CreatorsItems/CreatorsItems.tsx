
import React, { useCallback, useMemo } from "react";
import { FlatList, Text, View } from "react-native";
import createStyles, {  } from "./CreatorsItemsStyle";
import { useTheme } from "@react-navigation/native";
import { translations } from "shared/localization";
import ListHeader from "@shared-components/ListHeader/ListHeader";
import { ITEM_HEIGHT } from "@shared-components/CategoryItem/CategoryItemStyle";
import { Meal } from "@services/models";
import { useApi } from "hooks/useApi";
import { END_POINT, KEYS } from "@shared-constants";
import Creators from "@shared-components/Creators/Creators";

const CreatorsItems: React.FC = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const {isLoading, data} = useApi(KEYS.API_RECENT_RECIPIES, END_POINT.recent_recipies);
  
  const keyExtractor = (item: { idMeal: string; }) => item.idMeal;
  const renderItem = useCallback(({ item }: { item: Meal }) => {
    return <Creators cItem={item}/>
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
        <ListHeader title={translations.popularTitle} />
        { isLoading ? 
          (<View style={styles.loadingContainer}><Text style={styles.loadingText}>{translations.loading}</Text></View>)
          : data?.data?.meals && data?.data?.meals?.length && (<FlatList<Meal>
            horizontal={true}
            data={data?.data?.meals}
            keyExtractor={keyExtractor} 
            showsHorizontalScrollIndicator={false}
            getItemLayout={getItemLayout}
            renderItem={renderItem}
        />) }
    </View>
  );
};

export default React.memo(CreatorsItems);
