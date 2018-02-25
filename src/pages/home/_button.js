import React from 'react';
import withStyles from 'react-jss';
import cx from 'classnames';

import { Button } from '../../components';

const styles = theme => ({
  root: {
    display: 'flex',
    '&:hover': {
      '& $arrowBtn': {
        backgroundColor: theme.palette.primary.light,
        borderColor: theme.palette.primary.light
      }
    }
  },
  main: {
    display: 'flex',
    flex: '1'
  },
  mainBtn: {
    borderRight: 'none',
    paddingLeft: 20,
    textAlign: 'left'
  },
  arrow: {
    display: 'flex',
    flex: '1',
    maxWidth: 40
  },
  arrowBtn: {
    padding: 8
  },

  // medium +
  '@media screen and (min-width: 64em)': {
    mainBtn: {
      paddingLeft: 30
    }
  }
});

const HomeButton = props => {
  const {
    theme,
    sheet,
    classes,
    className,
    children,
    palette,
    outline,
    href,
    onClick,
    ...etc
  } = props;
  return (
    <div className={cx(classes.root, className)} {...etc}>
      <Button
        className={classes.main}
        href={href}
        palette={palette}
        outline={outline}
        buttonProps={{ className: classes.mainBtn }}
        onClick={onClick}
      >
        {children}
      </Button>
      <Button
        className={classes.arrow}
        href={href}
        buttonProps={{ className: classes.arrowBtn }}
        onClick={onClick}
      >
        <i className="mdi mdi-chevron-right" />
      </Button>
    </div>
  );
};

HomeButton.defaultProps = {
  palette: 'text'
};

export default withStyles(styles)(HomeButton);
