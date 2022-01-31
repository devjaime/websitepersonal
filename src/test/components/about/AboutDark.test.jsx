import React from 'react';
import {render} from '@testing-library/react';
import About from '../../../components/about/AboutDark';

describe('Test component <AboutDark />', () =>{

    test(' print message "Im Jaime Hernandez"', ()=>{

        const message = "I'm Jaime Hernandez"
        const wrapper = render(<About />)
    }) 
} )