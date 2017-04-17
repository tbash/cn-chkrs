/*
 *
 * Game
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectBoard,
  selectCurrentPlayer,
  selectPlayers,
} from './selectors';
import {
  resetGame,
  takeTurn,
} from './actions';
import Wrapper from './Wrapper';

import GameBoard from 'components/GameBoard';
import LeaderBoard from 'components/LeaderBoard';

export class Game extends React.PureComponent {
  render() {
    const {
      board,
      players,
      currentPlayer,
      resetGame,
      takeTurn,
    } = this.props;

    return (
      <Wrapper>
        <GameBoard
          board={board}
          players={players}
          currentPlayer={currentPlayer}
          takeTurn={takeTurn}
        />
        <LeaderBoard
          players={players}
          currentPlayer={currentPlayer}
          resetGame={resetGame}
        />
      </Wrapper>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  players: selectPlayers(),
  board: selectBoard(),
  currentPlayer: selectCurrentPlayer(),
});

const mapDispatchToProps = (dispatch) => ({
  resetGame: () => dispatch(resetGame()),
  takeTurn: (oldIndex, newIndex, currentPlayer) =>
    dispatch(takeTurn({ oldIndex, newIndex, currentPlayer })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
