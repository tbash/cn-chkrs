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
import Circle from './Circle';

const GameBoard = ({ board, players, currentPlayer }) => {
  return (
    <Wrapper>
      {board.toArray().map((row, i) =>
        <Row key={i}>
          {row.map((p, i) =>
            <Circle
              key={i}
              canMove={currentPlayer === p.occupyingPlayer()}
              color={
                players.getIn([p.occupyingPlayer(), 'color'])
              }
            />
          )}
        </Row>
      )}
    </Wrapper>
  );
}

export default DragDropContext(HTML5Backend)(GameBoard);
