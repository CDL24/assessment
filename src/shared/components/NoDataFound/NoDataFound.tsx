import { View, Text } from "react-native"
import React, { useMemo } from "react";
import { useTheme } from "@react-navigation/native";
import createStyles from "./NoDataFoundStyle";

type Props = {
    message: string
}
const NoDataFound: React.FC<Props> = ({message}) => {
  const theme = useTheme();
    const styles = useMemo(() => createStyles(theme), [theme]);
    return(
        <View style={styles.noSavedItemsTextContainer}>
            <Text style={styles.noSavedItemsText}>{message}</Text>
        </View>
    )
}

export default React.memo(NoDataFound);