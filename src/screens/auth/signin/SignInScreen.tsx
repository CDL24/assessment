import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as NavigationService from "react-navigation-helpers";
import createStyles from "./SignInScreenStyle";
import {
  CommonActions,
  useNavigation,
  useTheme,
} from "@react-navigation/native";
import { KEYS, SCREENS } from "@shared-constants";
import CustomText from "@shared-components/CustomText/CustomText";
import InputText from "@shared-components/InputText/InputText";
import { Image, View } from "react-native";
import Button from "@shared-components/Button/Button";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AuthContext } from "context/AuthContext";
import { authenticateUser } from "utils";
import { LOGIN_BACKGROUND } from "assets/constant";
import LinearGradient from "react-native-linear-gradient";
import fontSize from "@font-size";
import { moderateScale, verticalScale } from "@theme/metrix";
import { AuthData, AuthGuest } from "@services/models";

const SignInScreen: React.FC = () => {
  const theme = useTheme();
  const { colors } = theme;
  const styles = useMemo(() => createStyles(theme), [theme]);
  const navigation = useNavigation();

  const [username, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { authData, signIn, guestSignIn } = useContext(AuthContext);
  console.log("SignIn...Called", authData);
  const handleUsername = useCallback((text: string) => {
    setUserName(text);
  }, []);
  const handlePassword = useCallback((text: string) => {
    setPassword(text);
  }, []);
  const goToSignUp = async () => {
    // const response = await authenticateUser(username, password, authData, signIn)
    // if(response && response.authenticate){
    //   console.log("Login....Success", username, password);
    //   NavigationService.reset(SCREENS.HOME)
    // }else{
    //   console.log("Login....Failed", username, password);
    // }
    NavigationService.navigate(SCREENS.SIGNUP);
  };

  const onStartCooking = () => {
    guestSignIn();
  };
  const topTitleView = () => {
    return (
      <View
        style={{
          flex: 1,
          marginTop: verticalScale(50),
          flexDirection: "row",
          position: "absolute",
          alignSelf: "center",
          alignItems: "center",
        }}
      >
        <CustomText
          color={colors.primary}
          fontSize={moderateScale(fontSize.font16)}
        >
          60k+ Premium recipies
        </CustomText>
      </View>
    );
  };
  const bottomView = (): React.ReactElement => {
    return (
      <LinearGradient
        colors={["rgba(0,0,0,0)", "rgba(0,0,0,0.9)"]}
        style={{
          flex: 1,
          bottom: 0,
          width: "100%",
          position: "absolute",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            gap: verticalScale(20),
            flex: 1,
            width: "100%",
            paddingTop: verticalScale(250),
            paddingBottom: verticalScale(50),
          }}
        >
          <CustomText
            color={colors.secondaryWhite}
            fontSize={moderateScale(fontSize.font32)}
          >
            Yumm
          </CustomText>
          <CustomText
            color={colors.secondaryWhite}
            fontSize={moderateScale(fontSize.font16)}
          >
            Find the best recipes for coocking
          </CustomText>
          <View
            style={{
              flex: 1,
              gap: verticalScale(16),
              width: "50%",
              marginTop: verticalScale(10),
            }}
          >
            <Button title="Sign up" onPress={() => goToSignUp()} />
            <Button
              buttonStyle={{ backgroundColor: colors.secondaryWhite }}
              titleStyle={{ color: colors.primary }}
              title="Start coocking"
              onPress={() => onStartCooking()}
            />
          </View>
        </View>
      </LinearGradient>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <Image
        style={{ height: "100%", width: "100%" }}
        source={LOGIN_BACKGROUND}
      />

      {/* <CustomText>Username</CustomText>
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
        /> */}
      {topTitleView()}
      {bottomView()}
    </View>
  );
};

export default SignInScreen;
