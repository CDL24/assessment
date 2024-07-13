import { View, TouchableOpacity, Text } from "react-native"
import createStyles from "./CategoryItemStyle";
import { useMemo } from "react";
import { useTheme } from "@react-navigation/native";
import FastImage from "react-native-fast-image";
import { Category } from "@services/models";
import SMALL_STAR from "@assets/images/small_star.svg";
import BOOKMARK from "@assets/images/bookmark.svg";
import PLAY_ICON from "@assets/images/play_button.svg";
import AVATAR_1 from "@assets/images/avatar_1.svg";

export type CategoryProps = {
    cItem: Category;
    onPress?: () => void;
    isHorizontal?: boolean
}
const CategoryItem: React.FC<CategoryProps> = ({cItem, isHorizontal, onPress}) => {
    const theme = useTheme();
    const styles = useMemo(() => createStyles(theme), [theme]);
    return(
        <TouchableOpacity onPress={onPress} style={isHorizontal ? styles.container : styles.containerFull}>
            <View style={styles.categoryImgContainer}>
              <FastImage
                      style={styles.recipeImage}
                      source={{
                      uri: cItem?.strCategoryThumb,
                      priority: FastImage.priority.normal,
                  }}
                  resizeMode={FastImage.resizeMode.contain}
              />
              <View style={styles.playIconContainer}><PLAY_ICON /></View>
            </View>
            <View style={styles.rateContainer}>
                <SMALL_STAR />
                <Text style={styles.rateText}>4.5</Text>
            </View>
          <TouchableOpacity style={styles.favouriteContainer}>
            <BOOKMARK />
          </TouchableOpacity>
          <View style={styles.bottomContainer}>
            <Text style={styles.titleText} numberOfLines={1} ellipsizeMode="tail">{cItem?.strCategoryDescription}</Text>
          </View>
          <View style={styles.descriptionContainer}>
            <AVATAR_1 />
            <Text style={styles.descriptionText}>By Niki Samantha</Text>
          </View>
        </TouchableOpacity>
    )
}
export default CategoryItem;