import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import CallToAction from '../../../components/calltoactions/CallToAction';

describe('Test component <CallToAction />', () =>{

    test(' Test snapshot', ()=>{
      
        const wrapper = shallow(<CallToAction />)
        expect(wrapper).toMatchSnapshot()
    }); 
} )