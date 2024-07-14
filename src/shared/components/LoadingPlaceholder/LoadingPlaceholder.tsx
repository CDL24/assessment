import { View, Text } from "react-native"
import React, { useMemo } from "react";
import { useTheme } from "@react-navigation/native";
import createStyles from "./LoadingPlaceholderStyle";
import { translations } from "shared/localization";

const LoadingPlaceholder: React.FC = () => {
  const theme = useTheme();
    const styles = useMemo(() => createStyles(theme), [theme]);
    return(
        <View style={styles.loadingContainer}>
            <Text style={styles.loadingText}>{translations.loading}</Text>
        </View>
    )
}

export default React.memo(LoadingPlaceholder);