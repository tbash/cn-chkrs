/*
 *
 * Game
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectScoreOrderedPlayers,
  selectBoard,
  selectCurrentPlayer,
} from './selectors';
import {
  resetGame,
} from './actions';
import Wrapper from './Wrapper';

import GameBoard from 'components/GameBoard';
import LeaderBoard from 'components/LeaderBoard';

export class Game extends React.PureComponent {
  render() {
    const { board, players, currentPlayer, resetGame } = this.props;

    return (
      <Wrapper>
        <GameBoard
          board={board}
          players={players}
          currentPlayer={currentPlayer}
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
  players: selectScoreOrderedPlayers(),
  board: selectBoard(),
  currentPlayer: selectCurrentPlayer(),
});

const mapDispatchToProps = (dispatch) => ({
  resetGame: () => dispatch(resetGame()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
