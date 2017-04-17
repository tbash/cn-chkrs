import React from 'react';
import ReactDOM from 'react-dom';
import { fromJS } from 'immutable';
import { WinnerModal } from '../index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = { modalProps: fromJS({}) };

  ReactDOM.render(<WinnerModal {...props}/>, div);
});
