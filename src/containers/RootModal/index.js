/*
 *
 * RootModal
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectModalType, selectModalProps } from './selectors';
import { clearModal } from './actions';
import {
  SELECT_PLAYER_COUNT,
} from './constants';

import SelectPlayerCountModal from 'containers/SelectPlayerCountModal';

const MODAL_COMPONENTS = {
  [SELECT_PLAYER_COUNT]: SelectPlayerCountModal,
};

export const RootModal = ({ modalType, modalProps, close }) => {
  if(!!modalType) {
    const SpecificModal = MODAL_COMPONENTS[modalType];
    return (<SpecificModal modalProps={modalProps} close={close} />);
  } else {
    return null;
  }
};

const mapStateToProps = createStructuredSelector({
  modalType: selectModalType(),
  modalProps: selectModalProps(),
});

const mapDispatchToProps = (dispatch) => ({
  close: () => dispatch(clearModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RootModal);
