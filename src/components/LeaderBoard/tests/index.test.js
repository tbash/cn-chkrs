import React from 'react';
import ReactDOM from 'react-dom';
import LeaderBoard from '../index';
import { fromJS } from 'immutable';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {
    players: fromJS([]),
  };

  ReactDOM.render(<LeaderBoard {...props}/>, div);
});
