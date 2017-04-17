/*
 *
 * App
 *
 */

import React from 'react';
import Wrapper from './Wrapper';

import RootModal from 'containers/RootModal';
import Game from 'containers/Game';

export class App extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <RootModal/>
        <Game/>
      </Wrapper>
    );
  }
}

export default App;
