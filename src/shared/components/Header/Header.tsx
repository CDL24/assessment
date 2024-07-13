import { View, TouchableOpacity } from "react-native"
import BACK_ARROW  from "@assets/images/back_arrow.svg";
import MORE_MENU  from "@assets/images/more_menu.svg";
import createStyles from "./HeaderStyle";
import { useMemo } from "react";
import { useTheme } from "@react-navigation/native";

type Props = {
    onLeftPress:() => void
    onRightPress:() => void
}
const Header: React.FC<Props> = ({onLeftPress, onRightPress}) => {
  const theme = useTheme();
  const { colors } = theme;
    const styles = useMemo(() => createStyles(theme), [theme]);
    return(
        <View style={styles.header}>
            <TouchableOpacity onPress={onLeftPress}>
                <BACK_ARROW height={24} width={24} />
            </TouchableOpacity>
            <TouchableOpacity onPress={onRightPress}>
                <MORE_MENU height={24} width={24}/>
            </TouchableOpacity>
        </View>
    )
}

export default Header;