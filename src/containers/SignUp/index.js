import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import cx from 'classnames';

import styles from './styles';
import { TextField, Button } from '../../components/forms';

const SignUp = props => {
  const {
    theme,
    sheet,
    classes,
    className,
    title,
    palette,
    description,
    ...etc
  } = props;
  const cls = cx(classes.root, className);
  return (
    <div className={cls} {...etc}>
      <div className={classes.title}>
        <span className="text-primary">_</span>
        <strong>{title}</strong>
      </div>
      <div className={classes.description}>{description}</div>
      <TextField
        reversed
        palette={palette === 'text' || 'primary'}
        type="email"
        placeholder="Email"
      />
      <div className={classes.button}>
        <Button textAlign="left" fullWidth children="Submit" />
      </div>
    </div>
  );
};

SignUp.propTypes = {
  /**
   * Component Title Text
   */
  title: PropTypes.string.isRequired,

  /**
   * Component Description Text
   */
  description: PropTypes.string.isRequired,

  /**
   * Color palette for title and inputs.
   */
  palette: PropTypes.oneOf(['text', 'black'])
};

SignUp.defaultProps = {
  palette: 'black',
  title: 'Stay in touch',
  description:
    'Some text explaining what people are signing up for and reinforce that you won’t spam them.'
};

export default withStyles(styles)(SignUp);
