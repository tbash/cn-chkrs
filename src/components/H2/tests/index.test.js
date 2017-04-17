import React from 'react';
import ReactDOM from 'react-dom';
import H2 from '../index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<H2 />, div);
});
