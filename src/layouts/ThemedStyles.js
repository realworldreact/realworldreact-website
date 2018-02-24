import React from 'react';
import withStyles from 'react-jss';

const styles = theme => ({
  '@global': {
    body: {
      color: theme.palette.text.base,
      fontFamily: theme.typography.primary
    },
    a: {
      color: theme.palette.primary.base,
      transition: 'color 200ms ease-out',
      '&:hover': {
        color: theme.palette.primary.light
      }
    },
    '::selection': {
      backgroundColor: theme.palette.primary.base,
      color: theme.palette.primary.contrastText
    },
    '::-moz-selection': {
      backgroundColor: theme.palette.primary.base,
      color: theme.palette.primary.contrastText
    },
    '.text-primary': {
      color: theme.palette.primary.base
    }
  }
});

const ThemedStyles = ({ children }) => <div>{children}</div>;

export default withStyles(styles)(ThemedStyles);
