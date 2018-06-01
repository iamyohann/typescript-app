import * as React from 'react';

import { shallow } from 'enzyme';
import Button from '../components/Button';
import TextBox from '../components/TextBox';
import TodoBar from './TodoBar';
it('it contains a button and text box', () => {
    const wrapper = shallow(<TodoBar />);
    expect(wrapper.containsAllMatchingElements([
        <Button key="button">Add</Button>,
        <TextBox key="textBox" placeholder="Type something..." />
    ])).toEqual(true);
});