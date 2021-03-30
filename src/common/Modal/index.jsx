import PropTypes from 'prop-types';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { ANIMATION_DURATION } from 'theme';

import { Content, Footer, Header, StyledBackDropShadow, StyledModal } from './style';

const Modal = ({ children, display, onBackdropClick, footer, header }) => {
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
          <StyledModal>
            <Header>
              {header}
              <button type="button" onClick={handleBackdropClick}>
                X
              </button>
            </Header>
            <Content>{children}</Content>
            {footer && <Footer>{footer}</Footer>}
          </StyledModal>
        </CSSTransition>
      </StyledBackDropShadow>
    </CSSTransition>
  );
};

Modal.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.element]).isRequired,
  display: PropTypes.bool.isRequired,
  header: PropTypes.node,
  footer: PropTypes.node,
  onBackdropClick: PropTypes.func,
};

Modal.defaultProps = {
  footer: null,
  header: null,
  onBackdropClick: () => {},
};

export default Modal;
