import { View, Text } from "react-native";
import createStyles from "./LoginPlaceHolderStyle";
import { useContext, useMemo } from "react";
import { useTheme } from "@react-navigation/native";
import { translations } from "shared/localization";
import Button from "@shared-components/Button/Button";
import { AuthContext } from "context/AuthContext";

type Props = {
  message: string;
}
const LoginPlaceHolder: React.FC<Props> = ({message}) => {
  const theme = useTheme();
  const styles = useMemo(() => createStyles(theme), [theme]);
  const {signOut} = useContext(AuthContext);
  const { placeholderContainer, loginBtnStyle, placeHolderTextStyle } = styles;

  const goToLogin = () => {
    signOut();
  };

  return (
    <View style={placeholderContainer}>
      <Text style={placeHolderTextStyle}>{message}</Text>
      <Button
        title={translations.login}
        buttonStyle={loginBtnStyle}
        onPress={() => goToLogin()}
      />
    </View>
  );
};

export default LoginPlaceHolder;
