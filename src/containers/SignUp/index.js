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
    reversed,
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
        reversed={reversed}
        palette={palette}
        type="email"
        placeholder="Email"
      />
      <div className={classes.button}>
        <Button textAlign="left" children="Submit" />
      </div>
    </div>
  );
};

SignUp.propTypes = {
  /**
   * If the palette color is reversed.
   */
  reversed: PropTypes.bool,

  /**
   * Title text.
   */
  title: PropTypes.string.isRequired,

  /**
   * Description text.
   */
  description: PropTypes.string.isRequired,

  /**
   * Color palette for title and inputs.
   */
  palette: PropTypes.oneOf([
    'primary',
    'secondary',
    'text',
    'inverted',
    'black'
  ])
};

SignUp.defaultProps = {
  reversed: true,
  palette: 'primary',
  title: 'Stay in touch',
  description:
    'Stay up to date with the latest talks, videos, and events with our (non-spammy) newsletter.'
};

export default withStyles(styles)(SignUp);
