import React, { useMemo } from "react";
import { TouchableOpacity, Text, TextStyle, ViewStyle } from "react-native";
import createStyles from "./ButtonStyle";
import { useTheme } from "@react-navigation/native";

type ButtonProps = {
  title: String;
  onPress?: () => void;
  titleStyle?: TextStyle;
  buttonStyle?: ViewStyle;
  disabled?: boolean
};
const Button: React.FC<ButtonProps> = ({
  title,
  buttonStyle,
  titleStyle,
  onPress,
  disabled = false
}) => {
  
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <TouchableOpacity disabled={disabled} style={[styles.button, buttonStyle]} onPress={onPress}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(Button);
