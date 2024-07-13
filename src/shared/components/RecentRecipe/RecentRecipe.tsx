import { View, TouchableOpacity, Text } from "react-native"
import createStyles from "./RecentRecipeStyle";
import { useMemo } from "react";
import { useTheme } from "@react-navigation/native";
import FastImage from "react-native-fast-image";
import { Meal } from "@services/models";
import { moderateScale } from "@theme/metrix";
import { translations } from "shared/localization";

export type RecipeProps = {
    cItem: Meal;
    onPress?: () => void;
}
const RecentRecipeItem: React.FC<RecipeProps> = ({cItem, onPress}) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  return(
      <TouchableOpacity onPress={onPress} style={[styles.container, {columnGap:10}]}>
      <View style={{ borderRadius: moderateScale(8)}}>
        <FastImage
                style={styles.recipeImage}
                source={{
                uri: cItem?.strMealThumb,
                priority: FastImage.priority.normal,
            }}
            resizeMode={FastImage.resizeMode.cover}
        />
      </View>
      
    <View style={styles.bottomContainer}>
      <Text style={styles.titleText} numberOfLines={2} ellipsizeMode="tail">{cItem?.strMeal}</Text>
    </View>
    <View style={styles.descriptionContainer}>
      <Text style={styles.descriptionText}>{translations.name}</Text>
    </View>
  </TouchableOpacity>
  )
}
export default RecentRecipeItem;