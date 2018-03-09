import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import cx from 'classnames';

import styles from './styles';
import { TextField, Button } from '../../components/forms';

const Contact = props => {
  const { theme, sheet, classes, className, palette, ...etc } = props;
  const cls = cx(classes.root, className, 'row');
  return (
    <div className={cls} {...etc}>
      <div className="col-xs-12">
        <div className={classes.heading}>
          <h2>
            Ask a question, get started with our services, or simply{' '}
            <span className="text-inverted background-secondary">
              &nbsp;say hi.&nbsp;
            </span>
          </h2>
          <div className={classes.required}>* = required field</div>
        </div>
      </div>
      <div className="col-xs-12 col-sm-4">
        <TextField
          reversed
          className={classes.input}
          palette={palette}
          placeholder="Name*"
        />
        <TextField
          reversed
          className={classes.input}
          palette={palette}
          placeholder="Company*"
        />
        <TextField
          reversed
          className={classes.input}
          palette={palette}
          type="email"
          placeholder="Email*"
        />
        <TextField
          reversed
          className={classes.input}
          palette={palette}
          placeholder="Phone"
        />
      </div>
      <div className="col-xs-12 col-sm-8">
        <TextField
          reversed
          isTextarea
          placeholder="Message*"
          palette={palette}
          fieldProps={{
            className: classes.textArea
          }}
        />
        <div className={classes.button}>
          <Button
            showArrow
            textAlign="left"
            palette="black"
            children="Submit"
          />
        </div>
      </div>
    </div>
  );
};

Contact.propTypes = {
  /**
   * Color palette for content text and inputs.
   */
  palette: PropTypes.oneOf(['primary', 'secondary', 'text', 'black'])
};

Contact.defaultProps = {
  palette: 'primary'
};

export default withStyles(styles)(Contact);
