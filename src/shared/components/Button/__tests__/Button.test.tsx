import 'react-native';
import React from 'react';
import {it} from '@jest/globals';
import { create } from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react-native';
import Button from '@shared-components/Button/Button';


describe('<Button /> Component', ()=>{
    it('render correctly',()=>{
        const tree = create(<Button title={"Click"} onPress={()=>{}} />).toJSON();
        expect(tree).toMatchSnapshot();
    })

    it('onPress called when click', ()=>{
        const onPress = jest.fn();
        const {getByText} = render(<Button title={"Click"} onPress={onPress} />);
        fireEvent.press(getByText('Click'));
        expect(onPress).toHaveBeenCalled();
    })
});