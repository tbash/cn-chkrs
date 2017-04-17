import React from 'react';
import ReactDOM from 'react-dom';
import { SelectPlayerCountModal } from '../index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {};

  ReactDOM.render(<SelectPlayerCountModal {...props}/>, div);
});
