import React from 'react';
import { render } from '@testing-library/react-native';
import SignupScreen from '@screens/auth/signup/SignUpScreen';

describe("<SignUpScreen />", () =>{
    it("render all input fields and signup button correctly", ()=>{
        const {getByTestId} = render(<SignupScreen />);
        expect(getByTestId("firstName")).toBeTruthy();
    })
})