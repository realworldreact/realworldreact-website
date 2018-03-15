import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import TextareaAutoize from 'react-textarea-autosize';
import cx from 'classnames';

import ErrorMsg from '../ErrorMsg';
import styles from './styles';

const TextField = props => {
  const {
    theme,
    sheet,
    classes,
    className,
    palette,
    reversed,
    isTextarea,
    type,
    value,
    onChange,
    onFocus,
    onBlur,
    placeholder,
    errorText,
    fieldProps,
    ...etc
  } = props;
  const cls = cx(classes.root, className);
  const node = isTextarea ? TextareaAutoize : 'input';
  return (
    <div className={cls} {...etc}>
      {React.createElement(node, {
        type: node === 'input' ? type : null,
        value,
        onChange,
        onFocus,
        onBlur,
        placeholder,
        ...fieldProps,
        className: cx(classes.field, fieldProps.className)
      })}
      {!!errorText && <ErrorMsg>{errorText}</ErrorMsg>}
    </div>
  );
};

TextField.propTypes = {
  /**
   * Color palette.
   */
  palette: PropTypes.oneOf([
    'primary',
    'secondary',
    'text',
    'black',
    'inverted'
  ]),

  /**
   * If colors should be reversed.
   */
  reversed: PropTypes.bool,

  /**
   * If the field is a textarea.
   */
  isTextarea: PropTypes.bool,

  /**
   * If node 'input', its type.
   */
  type: PropTypes.oneOf(['text', 'number', 'email']),

  /**
   * Field input props.
   */
  value: PropTypes.string,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,

  /**
   * Field placeholder text.
   */
  placeholder: PropTypes.string,

  /**
   * When the field has an error, show this content below it.
   */
  errorText: PropTypes.any,

  /**
   * Extra fields to pass to the encapsulated field element.
   */
  fieldProps: PropTypes.object
};

TextField.defaultProps = {
  type: 'text',
  palette: 'primary',
  fieldProps: {}
};

export default withStyles(styles)(TextField);
