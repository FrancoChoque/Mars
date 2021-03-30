/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import React, { useRef } from 'react';
import * as style from './style';

const Input = ({
  id,
  label,
  name,
  value,
  leftIcon,
  onChange,
  errorStyle,
  inputStyle,
  placeholder,
  errorMessage,
  disabledStyle,
  autoCapitalize,
  containerStyle,
  onFocus,
  rightIcon,
  ...props
}) => {
  const hasErrors = errorMessage && errorMessage.length;
  const ref = useRef();

  return (
    <div css={[style.inputBaseContainer, containerStyle]}>
      {shouldRenderFeature('inputLabel.onlyForAppBar') && label && (
        <label htmlFor={id} css={style.label}>
          {label}
        </label>
      )}
      {leftIcon}
      <input
        id={id}
        ref={ref}
        type="text"
        name={name}
        value={value}
        onFocus={onFocus}
        onChange={onChange}
        placeholder={placeholder}
        autoCapitalize={autoCapitalize}
        css={[
          hasErrors ? style.inputWithError : style.getInputBaseStyle(disabledStyle),
          inputStyle,
        ]}
        {...props}
      />
      {rightIcon}
      {hasErrors ? (
        <p css={[style.textErrorMessage, errorStyle]} id={`${id}-error-message`}>
          {errorMessage}
        </p>
      ) : null}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  errorMessage: PropTypes.string,
  id: PropTypes.string.isRequired,
  autoCapitalize: PropTypes.string,
  name: PropTypes.string.isRequired,
  disabledStyle: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

Input.defaultProps = {
  label: '',
  placeholder: '',
  errorMessage: '',
  disabledStyle: {},
  onChange: () => {},
  autoCapitalize: 'none',
};

export default Input;
