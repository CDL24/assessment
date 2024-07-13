import { View, Text } from "react-native"
import createStyles from "./HeaderTitleStyle";
import { useMemo } from "react";
import { useTheme } from "@react-navigation/native";

type Props = {
    title: string;
}
const HeaderTitle: React.FC<Props> = ({title}) => {
  const theme = useTheme();
  const { colors } = theme;
    const styles = useMemo(() => createStyles(theme), [theme]);
    return(
        <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

export default HeaderTitle;