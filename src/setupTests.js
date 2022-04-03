import Enzyme from 'enzyme';

import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import {createSerializer} from 'enzyme-to-json';

// libraries to mock
import "./mock-i18next";

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer( createSerializer({ mode: 'deep'}));