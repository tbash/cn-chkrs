/*
 *
 * App
 *
 */

import React from 'react';
import Wrapper from './Wrapper';

import RootModal from 'containers/RootModal';
import Game from 'containers/Game';
import H1 from 'components/H1';

export class App extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <H1>Chinese Checkers</H1>
        <RootModal/>
        <Game/>
      </Wrapper>
    );
  }
}

export default App;
