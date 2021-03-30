import styled from 'styled-components';
import { ANIMATION_DURATION, COLORS, ANIMATION_TIMING, MARGIN_PADDING } from 'theme';

export const StyledBackDropShadow = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
  position: fixed;

  &.enter {
    background-color: transparent;
  }

  &.enter-active {
    transition: background-color ${ANIMATION_DURATION}ms ${ANIMATION_TIMING};
    background-color: ${COLORS.dark_shadow};
  }

  &.enter-done {
    background-color: ${COLORS.dark_shadow};
  }

  &.exit {
    background-color: ${COLORS.dark_shadow};
  }

  &.exit-active {
    background-color: transparent;
    transition: background-color ${ANIMATION_DURATION}ms ${ANIMATION_TIMING};
  }
`;

export const StyledModal = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${MARGIN_PADDING.extra_large}px;
  position: absolute;
  background-color: ${COLORS.white};
  border: 1px solid ${COLORS.light_gray};
  min-width: 375px;
  width: unset;
  transform: translate(-50%, 50%);
  left: 50%;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;

  &.enter {
    bottom: -100%;
  }

  &.enter-active {
    bottom: 50%;
    transition: bottom ${ANIMATION_DURATION}ms ${ANIMATION_TIMING};
  }

  &.enter-done {
    bottom: 50%;
  }

  &.exit {
    bottom: 50%;
  }

  &.exit-active {
    bottom: -100%;
    transition: bottom ${ANIMATION_DURATION}ms ${ANIMATION_TIMING};
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0 0 0;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
