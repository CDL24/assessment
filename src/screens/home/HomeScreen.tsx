import React, { useMemo, useState } from "react";
import { FlatList, Image, Text, View } from "react-native";
import Icon, { IconType } from "react-native-dynamic-vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import * as NavigationService from "react-navigation-helpers";
import createStyles, { ICON_HEIGHT, ICON_WIDTH } from "./HomeScreenStyle";
import CardItem from "./components/card-item/CardItem";
import MockData from "./mock/MockData";
import fonts from "@fonts";
import { useTheme } from "@react-navigation/native";
import { SCREENS } from "@shared-constants";
import Header from "@shared-components/Header/Header";
import HeaderTitle from "@shared-components/HeaderTitle/HeaderTitle";
import InputText from "@shared-components/InputText/InputText";
import { translations } from "shared/localization";
import { horizontalScale, verticalScale } from "@theme/metrix";
import SEARCH_ICON from "assets/images/search.svg";
import ListHeader from "@shared-components/ListHeader/ListHeader";

const HomeScreen: React.FC = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);
  const [input, setInput] = useState<string>('');

  const handleItemPress = () => {
    NavigationService.push(SCREENS.DETAIL);
  };

  const handleSearch = (text: string) => {
    console.log(text)
    setInput(text)
  }
  const renderSearchBar = () =>{
    return(
      <View style={styles.searchContainer}>
        <View style={styles.searchIconContainer}><SEARCH_ICON height={ICON_HEIGHT} width={ICON_WIDTH}/></View>
        <InputText
            value={input}
            onChangeText={handleSearch}
            placeholder={translations.searchRecipes}
            inputStyle={styles.customInput}
            inlineImageLeft=""
          />
      </View>
    )
  }
  const renderTrendingNowList = () => {
    return (
      <View style={styles.trendingContainer}>
        <ListHeader title={translations.trendingTitle} />
        {/* <FlatList
          horizontal={true}
          data={categoryData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <RecipeItem
              item={item}
              onPress={() => {
                navigation.navigate('RecipeDetail');
              }}
            />
          )}
        /> */}
      </View>
    );
  };
  // const renderList = () => (
  //   <View style={styles.listContainer}>
  //     <FlatList
  //       data={MockData}
  //       renderItem={({ item }) => (
  //         <CardItem data={item} onPress={handleItemPress} />
  //       )}
  //     />
  //   </View>
  // );

  return (
    <SafeAreaView style={styles.container}>
      {/* <Header onLeftPress={()=>console.log('back')} onRightPress={()=> console.log('right')}/> */}
        <View style={{flex: 1, gap: verticalScale(10), marginHorizontal: 16}}>
        <HeaderTitle title="Good afternoon, Alessandra!"/>
        {renderSearchBar()}
        {renderTrendingNowList()}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
