/**
 *
 * LeaderBoard
 *
 */

import React from 'react';
import Wrapper from './Wrapper';
import PlayerList from './PlayerList';
import PlayerItem from './PlayerItem';

import Button from 'components/Button';

const LeaderBoard = ({ players, currentPlayer, resetGame }) => (
  <Wrapper playersEmpty={players.isEmpty()}>
    <PlayerList>
      {players.map((p, i) =>
        <PlayerItem
          key={i}
          color={p.color()}>
          {`Player ${i+1} Score: ${p.score()}`}
          {currentPlayer === i ? ' (taking turn)' : ''}
        </PlayerItem>
      )}
    </PlayerList>
    <Button onClick={resetGame}>
      Reset Game
    </Button>
  </Wrapper>
);

export default LeaderBoard;
