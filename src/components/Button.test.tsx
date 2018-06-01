import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Button from './Button';

it('renders according to the snapshot', () => {
  const tree = renderer
    .create(<Button />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});