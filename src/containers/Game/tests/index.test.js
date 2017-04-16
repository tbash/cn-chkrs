// import Game from '../index';

import React from 'react';
import ReactDOM from 'react-dom';
import { Game } from '../index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {};

  ReactDOM.render(<Game {...props}/>, div);
});
