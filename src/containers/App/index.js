/*
 *
 * App
 *
 */

import React from 'react';
import Wrapper from './Wrapper';

import RootModal from 'containers/RootModal';

export class App extends React.PureComponent {
  render() {
    return (
      <Wrapper>
        <RootModal/>
      </Wrapper>
    );
  }
}

export default App;
