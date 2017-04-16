import React from 'react';
import ReactDOM from 'react-dom';
import Modal from '../index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {
    close: () => noop => noop,
    children: null,
    title: "Hey",
  };

  ReactDOM.render(<Modal {...props}/>, div);
});
