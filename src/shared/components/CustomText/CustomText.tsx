import React, { useMemo } from "react";
import { Text, TextProps, TextStyle } from "react-native";
import createStyles from "./CustomTextStyle";
import { useTheme } from "@react-navigation/native";

interface CustomTextProps extends TextProps {
  fontSize?: number;
  fontFamily?: string;
  color?: string;
}

const CustomText: React.FC<CustomTextProps> = ({
  children,
  style,
  fontSize,
  fontFamily,
  color,
  ...props
}) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);

  const textStyles: TextStyle[] = [styles.text];

  if (fontSize) {
    textStyles.push({ fontSize });
  }

  if (fontFamily) {
    textStyles.push({ fontFamily });
  }

  if (color) {
    textStyles.push({ color });
  }

  return (
    <Text style={textStyles} {...props}>
      {children}
    </Text>
  );
};

export default CustomText;
