import React, { useContext, useMemo, useState } from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import createStyles, { ICON_HEIGHT, ICON_WIDTH } from "./HomeScreenStyle";
import { useTheme } from "@react-navigation/native";
import HeaderTitle from "@shared-components/HeaderTitle/HeaderTitle";
import InputText from "@shared-components/InputText/InputText";
import { translations } from "shared/localization";
import SEARCH_ICON from "assets/images/search.svg";
import { AuthContext } from "context/AuthContext";
import { getProfileName } from "utils";
import TrendingItems from "./components/TrendingItems/TrendingItems";
import RecentItems from "./components/RecentItems/RecentItems";

const HomeScreen: React.FC = () => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const [input, setInput] = useState<string>('');
  const {authData} = useContext(AuthContext);

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
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
      {/* <Header onLeftPress={()=>console.log('back')} onRightPress={()=> console.log('right')}/> */}
        <View style={styles.subContainer}>
        <HeaderTitle title={getProfileName(authData && authData || undefined)}/>
        {renderSearchBar()}
        <TrendingItems />
        <RecentItems />
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
