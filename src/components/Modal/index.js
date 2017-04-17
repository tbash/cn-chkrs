/**
 *
 * Modal
 *
 */

import React from 'react';
import ReactModal from 'react-modal';
import modalStyles from './modalStyles';

import CloseButton from './CloseButton';
import Title from './Title';
import Content from './Content';

const Modal = ({ close, children, title }) => (
  <ReactModal
    onRequestClose={close}
    isOpen={true}
    style={modalStyles}
    shouldCloseOnOverlayClick={true}
    contentLabel={title}>
    <CloseButton onClick={close}>
      {"\u2716"}
    </CloseButton>
    <Title>
      {title}
    </Title>
    <Content>
      {children}
    </Content>
  </ReactModal>
);

export default Modal;
