
import React, { useCallback, useContext, useMemo } from "react";
import { FlatList, View } from "react-native";
import createStyles, {  } from "./BookmarkStyle";
import { useTheme } from "@react-navigation/native";
import { translations } from "shared/localization";
import CategoryItem from "@shared-components/CategoryItem/CategoryItem";
import { ITEM_HEIGHT } from "@shared-components/CategoryItem/CategoryItemStyle";
import { Category } from "@services/models";
import { useAppDispatch, useAppSelector } from "hooks";
import { addBookmark, bookmarkSelector } from "redux/slices/bookmark";
import LoginPlaceHolder from "@shared-components/LoginPlaceHolder/LoginPlaceHolder";
import TabSwitcher from "@shared-components/TabSwitcher/TabSwitcher";
import { AuthContext } from "context/AuthContext";
import NoDataFound from "@shared-components/NoDataFound/NoDataFound";

const BookmarkItems: React.FC = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const {authData} = useContext(AuthContext);
  const dispatch = useAppDispatch();
  const bookmark = useAppSelector(bookmarkSelector)
  
  const keyExtractor = (item: { idCategory: string; }) => item.idCategory;
  const renderItem = useCallback(({ item }: { item: Category }) => {
    return <CategoryItem cItem={item} isHorizontal={false} onBookmark={()=> {
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

  const renderSavedRecipies = () =>{
    
    return  bookmark?.length > 0 ? (
          <>
            <TabSwitcher tab1={translations.tabVideos} tab2={translations.tabRecipies}/>
            <FlatList<Category>
              contentContainerStyle={styles.containerStyle}
              horizontal={false}
              data={bookmark}
              keyExtractor={keyExtractor} 
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              getItemLayout={getItemLayout}
              renderItem={renderItem}
            />
          </>
    ) : (<NoDataFound message={translations.noSavedItems}/>)
   
  }      
  return (
    <View style={styles.trendingContainer}>
      {
        authData && authData?.isLoggedIn ? (
          renderSavedRecipies()
        ) : (
          <LoginPlaceHolder message={translations.loginPlaceholderBookmark}/>
        )
      }
    </View>
  );
};
export default React.memo(BookmarkItems);
