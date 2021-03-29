import PropTypes from 'prop-types';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { ANIMATION_DURATION } from 'theme';

import { StyledBackDropShadow, StyledModal } from './style';

const Modal = ({ children, display, onBackdropClick, backdropStyle, ...props }) => {
  const [showModal, setShowModal] = useState(false);

  function handleBackdropClick(event) {
    if (event.currentTarget === event.target) {
      onBackdropClick();
    }
  }

  return (
    <CSSTransition
      in={display}
      unmountOnExit
      mountOnEnter
      appear
      timeout={ANIMATION_DURATION}
      onEnter={() => setShowModal(true)}
      onExit={() => setShowModal(false)}
    >
      <StyledBackDropShadow onClick={handleBackdropClick}>
        <CSSTransition in={showModal} mountOnEnter unmountOnExit timeout={ANIMATION_DURATION}>
          <StyledModal {...props}>{children}</StyledModal>
        </CSSTransition>
      </StyledBackDropShadow>
    </CSSTransition>
  );
};

Modal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]).isRequired,
  display: PropTypes.bool.isRequired,
  onBackdropClick: PropTypes.func,
  backdropStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

Modal.defaultProps = {
  onBackdropClick: () => {},
  backdropStyle: {},
};

export default Modal;
