import React from 'react';
import Link from 'gatsby-link';
import withStyles from 'react-jss';

import styles from './styles';

const Navigation = ({ classes }) => (
  <ul className={classes.root}>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/training'>Training</Link></li>
    <li><Link to='/remote-placement'>Remote Placement</Link></li>
    <li><Link to='/engineering-retreats'>Engineering Retreats</Link></li>
    <li><Link to='/consulting'>Consulting</Link></li>
    <li><Link to='/instructors'>Instructors</Link></li>
    <li><Link to='/talks'>Talks</Link></li>
    <li><Link to='/podcasts'>Podcasts</Link></li>
    <li><Link to='/events'>Talks</Link></li>
    <li><Link to='/contact'>Contact</Link></li>
  </ul>
);

export default withStyles(styles)(Navigation);
