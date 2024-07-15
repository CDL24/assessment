import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import SignupScreen from '@screens/auth/signup/SignUpScreen';

describe("<SignUpScreen />", () =>{
    it("render all input fields and signup button correctly", ()=>{
        const {getByTestId, getByText} = render(<SignupScreen />);

        expect(getByTestId("firstName")).toBeDefined();
        expect(getByTestId("lastName")).toBeDefined();
        expect(getByTestId("email")).toBeDefined();
        expect(getByTestId("password")).toBeDefined();
        expect(getByTestId("confirmPassword")).toBeDefined();
        expect(getByText('Sign up')).toBeDefined();
    });

    it('user is able to enter value in each input field correctly', ()=>{
        const {getByPlaceholderText} = render(<SignupScreen />);

        fireEvent.changeText(getByPlaceholderText('Enter first name'), 'Jeon');
        fireEvent.changeText(getByPlaceholderText('Enter last name'), 'Mock');
        fireEvent.changeText(getByPlaceholderText('Enter email'), 'jeon.mock@email.com');
        fireEvent.changeText(getByPlaceholderText('Enter password'), 'password');
        fireEvent.changeText(getByPlaceholderText('Enter confirm password'), 'password');

        // Verify input values
        expect(getByPlaceholderText('Enter first name').props.value).toBe('Jeon');
        expect(getByPlaceholderText('Enter last name').props.value).toBe('Mock');
        expect(getByPlaceholderText('Enter email').props.value).toBe('jeon.mock@email.com');
        expect(getByPlaceholderText('Enter password').props.value).toBe('password');
        expect(getByPlaceholderText('Enter confirm password').props.value).toBe('password');
    });

    it('show validation errors for empty field data', ()=>{
        const {getByText} = render(<SignupScreen />);

        fireEvent.press(getByText('Sign up'));

        // Verify input values
        expect(getByText('Field is required')).toBeDefined();
        expect(getByText('Field is required')).toBeDefined();
        expect(getByText('Field is required')).toBeDefined();
        expect(getByText('Field is required')).toBeDefined();
        expect(getByText('Field is required')).toBeDefined();
    });
})