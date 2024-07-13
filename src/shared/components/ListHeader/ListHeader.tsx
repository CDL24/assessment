import { View, TouchableOpacity, Text } from "react-native"
import BACK_ARROW  from "@assets/images/back_arrow.svg";
import MORE_MENU  from "@assets/images/more_menu.svg";
import createStyles from "./ListHeaderStyle";
import { useMemo } from "react";
import { useTheme } from "@react-navigation/native";
import { translations } from "shared/localization";
import ARROW_RIGHT from "assets/images/arrow_right.svg";

type Props = {
    title: String;
  showRightButton?: boolean;
  onPress?: () => void;
}
const ListHeader: React.FC<Props> = ({title, showRightButton = true, onPress}) => {
  const theme = useTheme();
  const { colors } = theme;
    const styles = useMemo(() => createStyles(theme), [theme]);
    return(
        <View style={styles.container}>
        <Text style={styles.titleText}>{title}</Text>
        {showRightButton && (
            <TouchableOpacity style={styles.viewAll} onPress={onPress}>
                <Text style={styles.viewAllText}>{translations.seeAll}</Text>
                <TouchableOpacity onPress={onPress}><ARROW_RIGHT height={20} width={20}/></TouchableOpacity>   
            </TouchableOpacity>
        )}
    </View>
    )
}
export default ListHeader;