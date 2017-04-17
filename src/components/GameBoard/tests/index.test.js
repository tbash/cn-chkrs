import React from 'react';
import ReactDOM from 'react-dom';
import GameBoard from '../index';
import { fromJS } from 'immutable';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {
    board: fromJS({}),
  };

  ReactDOM.render(<GameBoard {...props}/>, div);
});
