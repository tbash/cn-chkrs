/**
 *
 * GameBoard
 *
 */

import React from 'react';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import Wrapper from './Wrapper';

import Row from './Row';
import SourceCircle from './SourceCircle';
import TargetCircle from './TargetCircle';

const GameBoard = ({ board, players, currentPlayer, takeTurn }) => {
  return (
    <Wrapper>
      {board.toArray().map((row, k) =>
        <Row key={k}>
          {row.map((p, i) => {
            const player  = players.get(p.occupyingPlayer())
            const current = players.get(currentPlayer)
            const Circle  = !!player ? SourceCircle : TargetCircle;

            return (
              <Circle
                key={i}
                index={p.index()}
                canMove={currentPlayer === p.occupyingPlayer()}
                currentPlayer={currentPlayer}
                color={player ? player.color() : current.color()}
                takeTurn={takeTurn}
                board={board}
                row={k}
              />
            );
          })}
        </Row>
      )}
    </Wrapper>
  );
}

export default DragDropContext(HTML5Backend)(GameBoard);
