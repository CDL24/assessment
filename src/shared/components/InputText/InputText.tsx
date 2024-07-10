import React, { useMemo } from "react";
import { TextInput, TextInputProps } from "react-native";
import createStyles from "./InputTextStyle";
import { useTheme } from "@react-navigation/native";

interface InputTextProps extends TextInputProps {
  inputStyle?: TextInputProps["style"]; // To override default input style
}

const InputText: React.FC<InputTextProps> = ({ inputStyle, ...props }) => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  return (
    <TextInput
      style={[styles.input, inputStyle]}
      placeholderTextColor={colors.highlight}
      {...props}
    />
  );
};

export default InputText;
