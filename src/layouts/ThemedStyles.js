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

    // Global selection
    '::selection': {
      backgroundColor: theme.palette.primary.base,
      color: theme.palette.primary.contrastText
    },
    '::-moz-selection': {
      backgroundColor: theme.palette.primary.base,
      color: theme.palette.primary.contrastText
    },

    // Text
    '.text-primary': {
      color: theme.palette.primary.base
    },
    '.text-secondary': {
      color: theme.palette.secondary.base
    },
    '.text-inverted': {
      color: theme.palette.inverted.base
    },
    '.background-primary': {
      backgroundColor: theme.palette.primary.base
    },
    '.background-secondary': {
      backgroundColor: theme.palette.secondary.base
    },
    '.background-inverted': {
      backgroundColor: theme.palette.inverted.base
    }
  }
});

const ThemedStyles = ({ children }) => <div>{children}</div>;

export default withStyles(styles)(ThemedStyles);
