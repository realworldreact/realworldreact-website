import React from 'react';
import withStyles from 'react-jss';

const styles = (theme) => ({
  '@global': {
    'body': {
      color: theme.palette.text.base,
    },
    'a': {
      color: theme.palette.primary.base,
      transition: 'color 200ms ease-out',
      '&:hover': {
        color: theme.palette.primary.dark,
      }
    },
  },
});

const ThemedStyles = ({ children }) => (
  <div>{children}</div>
);

export default withStyles(styles)(ThemedStyles);
