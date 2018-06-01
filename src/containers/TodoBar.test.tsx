import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as renderer from 'react-test-renderer';

import { shallow } from 'enzyme';
import Button from '../components/Button';
import TextBox from '../components/TextBox';
import TodoBar from './TodoBar';
it('it contains a button and text box', () => {
    const wrapper = shallow(<TodoBar />);

});