import React from 'react';
import Helmet from 'react-helmet';
import withStyles from 'react-jss';
import cx from 'classnames';

import imagePatternDots from '../assets/images/patterns/dots.png';
import gallery from '../data/gallery.json';
import {
  Header,
  Footer,
  Drops,
  TextField,
  Button,
  Gallery
} from '../components';
import { SignUp } from '../containers';

const styles = theme => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column'
  },

  // MAIN
  main: {
    flex: '1',
    '& h1': {
      marginTop: 0
    }
  },
  mainContainer: {},
  mainItems: {
    padding: 0,
    margin: 0
  },
  mainContent: {
    padding: 20,
    maxWidth: '100%'
  },

  // FORM
  form: {
    marginTop: 60
  },
  formInput: {
    marginBottom: 20
  },
  formInputQuestion: {
    marginBottom: 20,
    minHeight: 90
  },
  formInputMessage: {
    borderBottomWidth: 0,
    minHeight: 180
  },

  // GALLERY
  gallery: {
    marginTop: 20,
    padding: 0
  },

  // FOOTER
  footer: {
    backgroundColor: theme.palette.inverted.base,
    backgroundImage: `url(${imagePatternDots})`,
    position: 'relative',
    marginTop: 0
  },
  footerDrops: {
    display: 'none'
  },

  // small +
  '@media screen and (min-width: 48em)': {
    // MAIN
    mainContainer: {
      padding: [120, 20, 20]
    },
    mainItems: {
      //
    },
    mainContent: {
      padding: 0,
      maxWidth: 550
    },

    // FORM
    form: {
      marginTop: 80
    },

    // GALLERY
    gallery: {
      marginTop: 0
    },

    // FOOTER
    footer: {
      marginTop: 80
    },
    footerDrops: {
      display: 'block'
    }
  }
});

const EngineeringRetreatsPage = ({ classes }) => (
  <div>
    <Helmet>
      <title>Engineering Retreats | Real World React</title>
    </Helmet>
    <div className={classes.root}>
      {/* HEADER */}
      <Header />

      {/* MAIN */}
      <div className={classes.main}>
        <div className={cx(classes.mainContainer, 'container')}>
          <div className={cx(classes.mainItems, 'row')}>
            <div className="col-xs-12 col-sm-8">
              <div className={classes.mainContent}>
                <h1>
                  <div>Offsite Retreats to</div>
                  <span className="text-inverted background-secondary">
                    &nbsp;Supercharge your Engineers&nbsp;
                  </span>
                </h1>
                <p>
                  If you think that retreats are only for senior management, or
                  you just don’t believe that they provide demonstrable value,
                  then you haven’t heard of React Retreat.
                </p>
                <p>
                  With React Retreat, we seamlessly blend our training and
                  consulting services with outings and activities to not only
                  solve your technical problems and train your team, but also to
                  bring your team closer together. That way your engineers can
                  level up their skills while forging a bond with their
                  colleagues and managers.
                </p>
                <p>
                  Experience the most productive fun you’ve ever had with React
                  Retreat.
                </p>
                <div className={classes.form}>
                  <h2>
                    Tell us about your{' '}
                    <span className="text-inverted background-secondary">
                      &nbsp;Dream Retreat&nbsp;
                    </span>
                  </h2>
                  <div className="row">
                    <div className="col-sm-6 col-xs-12">
                      <TextField
                        className={classes.formInput}
                        placeholder="Name*"
                      />
                    </div>
                    <div className="col-sm-6 col-xs-12">
                      <TextField
                        className={classes.formInput}
                        type="email"
                        placeholder="Email*"
                      />
                    </div>
                    <div className="col-sm-6 col-xs-12">
                      <TextField
                        className={classes.formInput}
                        placeholder="Company*"
                      />
                    </div>
                    <div className="col-sm-6 col-xs-12">
                      <TextField
                        className={classes.formInput}
                        placeholder="Phone*"
                      />
                    </div>
                    <div className="col-xs-12">
                      <TextField
                        isTextarea
                        placeholder="What technologies are you seeking to learn, or improve?"
                        fieldProps={{
                          className: classes.formInputQuestion
                        }}
                      />
                    </div>
                    <div className="col-xs-12">
                      <TextField
                        className={classes.formInput}
                        type="number"
                        placeholder="How big is your team?"
                      />
                    </div>
                    <div className="col-xs-12">
                      <TextField
                        isTextarea
                        placeholder="Where would you like your retreat to be?"
                        fieldProps={{
                          className: classes.formInputQuestion
                        }}
                      />
                    </div>
                    <div className="col-xs-12">
                      <TextField
                        isTextarea
                        placeholder="Tell us more about what you're looking to learn from this Retreat."
                        fieldProps={{
                          className: classes.formInputMessage
                        }}
                      />
                      <Button
                        showArrow
                        textAlign="left"
                        palette="text"
                        children="Submit"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={cx(classes.gallery, 'col-xs-12 col-sm-4')}>
              <Gallery images={gallery} />
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className={classes.footer}>
        <div className={classes.footerDrops}>
          <Drops bottom />
        </div>
        <Footer footerContent={<SignUp />} />
      </div>
    </div>
  </div>
);

export default withStyles(styles)(EngineeringRetreatsPage);
