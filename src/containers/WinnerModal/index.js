/*
 *
 * WinnerModal
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import Wrapper from './Wrapper';

import { resetGame } from 'containers/Game/actions';
import Button from 'components/Button';
import Modal from 'components/Modal';
import H2 from 'components/H2';

export const WinnerModal = ({ resetGame, modalProps }) => {
  const winnerId = modalProps.get('winnerId');

  return (
    <Modal title='Select Player Count' close={resetGame}>
      <Wrapper>
        <H2>{`Player ${winnerId + 1} wins!!`}</H2>
        <Button onClick={resetGame}>
          Reset Game
        </Button>
      </Wrapper>
    </Modal>
  );
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  resetGame: () => dispatch(resetGame()),
});

export default connect(null, mapDispatchToProps)(WinnerModal);
