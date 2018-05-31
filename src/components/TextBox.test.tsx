import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as renderer from 'react-test-renderer';

import TextBox from './TextBox';

it('renders according to the snapshot', () => {
  const tree = renderer
    .create(<TextBox />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});