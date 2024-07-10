import React, { useMemo } from 'react';
import { TouchableOpacity, TouchableOpacityProps, Text, TextStyle } from 'react-native';
import createStyles from "./ButtonStyle";
import { useTheme } from "@react-navigation/native";

interface CustomButtonProps extends TouchableOpacityProps {
  title: string;
  buttonStyle?: TouchableOpacityProps['style']; // To override default button style
  titleStyle?: TextStyle // To override default title style
}

const Button: React.FC<CustomButtonProps> = ({
  title,
  buttonStyle,
  titleStyle,
  ...props
}) => {
  console.log('buton')
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <TouchableOpacity style={[styles.button, buttonStyle]} {...props}>
      <Text style={[styles.title, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;