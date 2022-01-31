import React from 'react';
import '@testing-library/jest-dom';
import {shallow} from 'enzyme';
import Blog from '../../../components/Blog/Blog';

describe('Test component <Blog />', () =>{

    test(' Test snapshot', ()=>{
      
        const wrapper = shallow(<Blog />)
        expect(wrapper).toMatchSnapshot()
    }); 
} )