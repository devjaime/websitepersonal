import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import CallToActionTwo from '../../../components/calltoactions/CallToActionTwo';

describe('Test component <CallToAction />', () =>{

    test(' Test snapshot', ()=>{
      
        const wrapper = shallow(<CallToActionTwo />)
        expect(wrapper).toMatchSnapshot()
    }); 
} )