import { View, TouchableOpacity, Text } from "react-native"
import createStyles from "./CreatorsStyle";
import { useMemo } from "react";
import { useTheme } from "@react-navigation/native";
import FastImage from "react-native-fast-image";
import { Meal } from "@services/models";

export type CreatorsProps = {
    cItem: Meal;
    onPress?: () => void;
}
const Creators: React.FC<CreatorsProps> = ({cItem, onPress}) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  return(
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <FastImage
            style={styles.recipeImage}
            source={{
            uri: cItem?.strMealThumb,
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
    <View style={styles.bottomContainer}>
      <Text style={styles.titleText} numberOfLines={2} ellipsizeMode="tail">{cItem?.strMeal}</Text>
    </View>
  </TouchableOpacity>
  )
}
export default Creators;