import React from 'react';
import ReactDOM from 'react-dom';
import { fromJS } from 'immutable';
import Wrapper from '../Wrapper';

// The App Conatainer contains other "connected" containers,
// an isolated smoke test is not possible. Testing
// the App Wrapper instead.
//
it('renders Wrapper without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<Wrapper />, div);
});
