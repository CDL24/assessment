import React, { useCallback, useContext, useMemo, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as NavigationService from "react-navigation-helpers";
import createStyles from "./SignUpScreenStyle";
import { useTheme } from "@react-navigation/native";
import { KEYS, SCREENS } from "@shared-constants";
import CustomText from "@shared-components/CustomText/CustomText";
import { View } from "react-native";
import InputText from "@shared-components/InputText/InputText";
import Button from "@shared-components/Button/Button";
import { setItem } from "utils";
import { AuthContext } from "context/AuthContext";

const SignUpScreen: React.FC = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);
  const authContext = useContext(AuthContext)
  console.log('authContext',authContext)
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleEmail = useCallback((text: string) => {
      console.log("handleEmail", text);
      setEmail(text);
  }, []);
  const handlePassword = useCallback((text: string) => {
      setPassword(text);
  }, []);
  const doSignUp = () => {
    console.log("Signup Success....", 'email:',email, 'password:',password);
    //setItem(KEYS.USER, { email: email, password: password });
    authContext.signIn({ email: email, password: password })
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
        <CustomText>Email</CustomText>
        <InputText
          value={email}
          onChangeText={handleEmail}
          placeholder="Enter email"
          inputStyle={styles.customInput}
        />
        <CustomText>Password</CustomText>
        <InputText
          value={password}
          onChangeText={handlePassword}
          placeholder="Enter password"
          inputStyle={styles.customInput}
          secureTextEntry={true}
        />
        <CustomText>Confirm Password</CustomText>
        <InputText
          value={password}
          onChangeText={handlePassword}
          placeholder="Donfirm password"
          inputStyle={styles.customInput}
          secureTextEntry={true}
        />
        <Button title="Sign Up" onPress={doSignUp} />
      </View>
    </View>
  );
};

export default SignUpScreen;
