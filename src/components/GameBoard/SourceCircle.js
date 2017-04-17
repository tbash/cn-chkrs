import React from 'react';
import { DragSource } from 'react-dnd';
import StyledCircle from './StyledCircle';

const circleSource = {
  beginDrag(props) {
    return { oldIndex: props.index, ...props };
  },
  canDrag(props) {
    return props.canMove;
  }
};

const collect = (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
});

class SourceCircle extends React.Component {
  render() {
    const { connectDragSource, isDragging, color, ...rest } = this.props;
    return connectDragSource(
      <div>
        <StyledCircle
          color={!isDragging && color}
          {...rest}
        />
      </div>
    );
  }
}

export default DragSource('CIRCLE', circleSource, collect)(SourceCircle);
