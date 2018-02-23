import React from 'react';
import withStyles from 'react-jss';

const styles = (theme) => ({
  '@global': {
    'body': {
      color: theme.palette.text.base,
      fontFamily: theme.typography.primary,
    },
    'a': {
      color: theme.palette.primary.base,
      transition: 'color 200ms ease-out',
      '&:hover': {
        color: theme.palette.primary.dark,
      }
    },
    '::selection': {
      backgroundColor: theme.palette.inverted.base,
      color: theme.palette.primary.base,
    },
    '::-moz-selection': {
      backgroundColor: theme.palette.inverted.base,
      color: theme.palette.primary.base,
    },
    '.underscore-title': {
      position: 'relative',
      '&:before': {
        content: '"_"',
        paddingRight: 5,
        color: theme.palette.primary.base
      }
    }
  },
});

const ThemedStyles = ({ children }) => (
  <div>{children}</div>
);

export default withStyles(styles)(ThemedStyles);
