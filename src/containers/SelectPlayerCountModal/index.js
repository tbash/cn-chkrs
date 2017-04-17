/*
 *
 * SelectPlayerCountModal
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Wrapper from './Wrapper';
import CircleButton from './CircleButton';

import { setPlayerCount } from 'containers/Game/actions';
import Modal from 'components/Modal';
import H2 from 'components/H2';

export const SelectPlayerCountModal = ({ close, setPlayerCount }) => {
  const renderButton = (playerCount) => (
    <CircleButton key={playerCount} onClick={() => setPlayerCount(playerCount)}>
      {playerCount}
    </CircleButton>
  );

  return (
    <Modal title='Select Player Count' close={close}>
      <Wrapper>
        <H2>So this is Chinese Checkers.</H2>
        <H2>How many people actually want to play?</H2>
        {[2,3,4,5,6].map(pc => renderButton(pc))}
        <H2>(defaults to 2 players)</H2>
      </Wrapper>
    </Modal>
  );
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  setPlayerCount: (playerCount) => {
    ownProps.close();
    return dispatch(setPlayerCount({ playerCount }));
  },

  close: () => {
    ownProps.close();
    return dispatch(setPlayerCount({ playerCount: 2 }));
  },
});

export default connect(null, mapDispatchToProps)(SelectPlayerCountModal);
