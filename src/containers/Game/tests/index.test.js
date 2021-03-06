import React from 'react';
import ReactDOM from 'react-dom';
import { Game } from '../index';
import { fromJS } from 'immutable';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {
    board: fromJS({}),
    players: fromJS([]),
  };

  ReactDOM.render(<Game {...props}/>, div);
});
