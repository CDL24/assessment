import React, { useCallback, useEffect, useMemo, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as NavigationService from "react-navigation-helpers";
import createStyles from "./SignInScreenStyle";
import { useTheme } from "@react-navigation/native";
import { KEYS, SCREENS } from "@shared-constants";
import CustomText from "@shared-components/CustomText/CustomText";
import InputText from "@shared-components/InputText/InputText";
import { View } from "react-native";
import Button from "@shared-components/Button/Button";
import { TouchableOpacity } from "react-native-gesture-handler";
import { getItem } from "utils";

const SignInScreen: React.FC = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);

  const [username, setUserName] = useState<string>();
  const [password, setPassword] = useState<string>();

  useEffect(() => {
    const data = getItem(KEYS.USER);
    console.log("data", data);
  }, []);
  const handleUsername = useCallback(() => {
    (text: string) => {
      setUserName(text);
    };
  }, []);
  const handlePassword = useCallback(() => {
    (text: string) => {
      setPassword(text);
    };
  }, []);
  const doLogin = () => {
    console.log("Login....");
  };
  const goToSignup = () => {
    NavigationService.push(SCREENS.SIGNUP);
  };
  return (
    <View style={{ backgroundColor: "pink", flex: 1 }}>
      <View
        style={{
          marginHorizontal: 16,
          justifyContent: "center",
          flex: 1,
          gap: 10,
        }}
      >
        <CustomText>Username</CustomText>
        <InputText
          value={username}
          onChangeText={handleUsername}
          placeholder="Enter your text"
          inputStyle={styles.customInput}
        />
        <CustomText>Password</CustomText>
        <InputText
          value={password}
          onChangeText={handlePassword}
          placeholder="Enter your password"
          inputStyle={styles.customInput}
          secureTextEntry={true}
        />
        <Button title="Login" onPress={() => doLogin()} />
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
          }}
          onPress={() => goToSignup()}
        >
          <CustomText color="blue">SignUp</CustomText>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignInScreen;
