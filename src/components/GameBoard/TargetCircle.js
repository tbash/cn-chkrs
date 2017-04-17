import React from 'react';
import { DropTarget } from 'react-dnd';
import StyledCircle from './StyledCircle';
import validateMove from './validateMove';

const circleTarget = {
  drop(props, monitor) {
    const { index, currentPlayer } = props;
    const { oldIndex } = monitor.getItem();
    props.takeTurn(oldIndex, index, currentPlayer);
  },
  canDrop(props, monitor) {
    return validateMove(props, monitor.getItem());
  }
};

const collect = (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop()
});

class TargetCircle extends React.Component {
  render() {
    const { connectDropTarget, isOver, canDrop , color  } = this.props;
    return connectDropTarget(
      <div>
        <StyledCircle color={canDrop && isOver && color}/>
      </div>
    );
  }
}

export default DropTarget('CIRCLE', circleTarget, collect)(TargetCircle);
