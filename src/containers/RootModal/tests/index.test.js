import React from 'react';
import ReactDOM from 'react-dom';
import { RootModal } from '../index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RootModal/>, div);
});
