import React from 'react';
import {it} from '@jest/globals';
import { render } from '@testing-library/react-native';
import TabSwitcher from '../TabSwitcher';
import { create } from 'react-test-renderer';

describe("<TabSwitcher /> Component", ()=>{
    it("render correctly", ()=>{
        const tree = create(<TabSwitcher tab1='Tab1' tab2='Tab2' />).toJSON();
        expect(tree).toMatchSnapshot();       
    });

    it('onTab pressed', ()=>{
        const {getByText} = render(<TabSwitcher tab1='Tab1' tab2='Tab2' />);
        expect(getByText('Tab1')).toBeTruthy()
    })
});