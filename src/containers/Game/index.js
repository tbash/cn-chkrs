/*
 *
 * Game
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import selectGame from './selectors';

export class Game extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
      </div>
    );
  }
}

const mapStateToProps = selectGame();

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
