import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import cx from 'classnames';

import styles from './styles';
import { TextField, Button } from '../../components/forms';

const Contact = props => {
  const { theme, sheet, classes, className, palette, ...etc } = props;
  const cls = cx(classes.root, className, 'row');
  const inputPalette = palette === 'text' || 'primary';
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
          palette={inputPalette}
          type="text"
          placeholder="Name*"
        />
        <TextField
          reversed
          className={classes.input}
          palette={inputPalette}
          type="text"
          placeholder="Company*"
        />
        <TextField
          reversed
          className={classes.input}
          palette={inputPalette}
          type="email"
          placeholder="Email*"
        />
        <TextField
          reversed
          className={classes.input}
          palette={inputPalette}
          type="number"
          placeholder="Phone"
        />
      </div>
      <div className="col-xs-12 col-sm-8">
        <TextField
          reversed
          isTextarea
          palette="primary"
          placeholder="Message*"
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
  palette: PropTypes.oneOf(['text', 'black'])
};

Contact.defaultProps = {
  palette: 'black'
};

export default withStyles(styles)(Contact);
