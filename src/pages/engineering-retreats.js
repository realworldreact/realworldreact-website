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
  Gallery,
  ErrorMsg,
  Validation
} from '../components';
import { SignUp } from '../containers';
import { createValidator } from '../tools';

const validator = createValidator({
  name: {
    presence: { message: 'Name field is required.' },
    length: { minimum: 2, maximum: 256, message: 'A valid name is required.' }
  },
  company: {
    presence: { message: 'Company name field is required.' },
    length: {
      minimum: 2,
      maximum: 256,
      message: 'A valid company name is required.'
    }
  },
  email: {
    email: { message: 'A valid email address is required.' }
  },
  phone: {
    length: {
      maximum: 32,
      message: 'A valid phone number is required.'
    }
  },
  tech: {
    presence: { message: 'This field is required.' },
    length: {
      minimum: 2,
      maximum: 2048,
      message: 'A valid message is required.'
    }
  },
  companySize: {
    presence: { message: 'The company size field is required.' },
    length: {
      minimum: 2,
      maximum: 2048,
      message: 'A valid company size is required.'
    }
  },
  location: {
    presence: { message: 'The location field is required.' },
    length: {
      minimum: 2,
      maximum: 2048,
      message: 'A valid location is required.'
    }
  },
  notes: {
    presence: { message: 'The notes field is required.' },
    length: {
      minimum: 2,
      maximum: 2048,
      message: 'Valid notes are required.'
    }
  }
});

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

class EngineeringRetreatsPage extends React.Component {
  constructor() {
    super(...arguments);

    // Initialize form fields as empty.
    const fields = {};
    Object.keys(validator.constraints).forEach(key => (fields[key] = ''));

    this.state = {
      data: {
        dirties: {},
        changed: {},
        errors: {},
        fields
      }
    };

    // Validation form ref.
    this.validation = null;
  }

  render() {
    const { classes } = this.props;
    const { data } = this.state;

    // Make validated and controlled dynamic fields.
    const makeField = (name, props) => (
      <TextField
        {...props}
        name={name}
        errorText={data.errors[name]}
        value={data.fields[name]}
        onChange={ev => this.validation.onChange(name, ev.target.value)}
        onBlur={() => this.validation.onBlur(name)}
      />
    );

    return (
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
                      If you think that retreats are only for senior management,
                      or you just don’t believe that they provide demonstrable
                      value, then you haven’t heard of React Retreat.
                    </p>
                    <p>
                      With React Retreat, we seamlessly blend our training and
                      consulting services with outings and activities to not
                      only solve your technical problems and train your team,
                      but also to bring your team closer together. That way your
                      engineers can level up their skills while forging a bond
                      with their colleagues and managers.
                    </p>
                    <p>
                      Experience the most productive fun you’ve ever had with
                      React Retreat.
                    </p>
                    <form
                      className={classes.form}
                      onSubmit={this.onSubmit}
                      noValidate
                      name="engineering-retreats"
                      method="POST"
                      data-netlify="true"
                    >
                      <Validation
                        ref={el => (this.validation = el)}
                        data={data}
                        validator={validator}
                        onUpdate={this.onUpdate}
                      >
                        <h2>
                          Tell us about your{' '}
                          <span className="text-inverted background-secondary">
                            &nbsp;Dream Retreat&nbsp;
                          </span>
                        </h2>
                        <div className="row">
                          <div
                            className={cx(
                              classes.formInput,
                              'col-sm-6 col-xs-12'
                            )}
                          >
                            {makeField('name', { placeholder: 'Name*' })}
                          </div>
                          <div
                            className={cx(
                              classes.formInput,
                              'col-sm-6 col-xs-12'
                            )}
                          >
                            {makeField('email', {
                              type: 'email',
                              placeholder: 'Email*'
                            })}
                          </div>
                          <div
                            className={cx(
                              classes.formInput,
                              'col-sm-6 col-xs-12'
                            )}
                          >
                            {makeField('company', { placeholder: 'Company*' })}
                          </div>
                          <div
                            className={cx(
                              classes.formInput,
                              'col-sm-6 col-xs-12'
                            )}
                          >
                            {makeField('phone', { placeholder: 'Phone' })}
                          </div>
                          <div className={cx(classes.formInput, 'col-xs-12')}>
                            {makeField('tech', {
                              isTextarea: true,
                              placeholder:
                                'What technologies are you seeking to learn, or improve?*',
                              fieldProps: {
                                className: classes.formInputQuestion
                              }
                            })}
                          </div>
                          <div className={cx(classes.formInput, 'col-xs-12')}>
                            {makeField('companySize', {
                              isTextarea: true,
                              placeholder: 'How big is your team?*',
                              fieldProps: {
                                className: classes.formInputQuestion
                              }
                            })}
                          </div>
                          <div className={cx(classes.formInput, 'col-xs-12')}>
                            {makeField('location', {
                              isTextarea: true,
                              placeholder:
                                'Where would you like your retreat to be?*',
                              fieldProps: {
                                className: classes.formInputQuestion
                              }
                            })}
                          </div>
                          <div className={cx(classes.formInput, 'col-xs-12')}>
                            <TextField
                              isTextarea
                              placeholder="Tell us more about what you're looking to learn from this Retreat*"
                              fieldProps={{
                                className: classes.formInputMessage
                              }}
                              name="notes"
                              value={data.fields.notes}
                              onChange={ev =>
                                this.validation.onChange(
                                  'notes',
                                  ev.target.value
                                )
                              }
                              onBlur={() => this.validation.onBlur('notes')}
                            />
                            <Button
                              showArrow
                              textAlign="left"
                              palette="text"
                              type="submit"
                              children="Submit"
                            />
                            {!!data.errors.notes && (
                              <ErrorMsg>{data.errors.notes}</ErrorMsg>
                            )}
                          </div>
                        </div>
                      </Validation>
                    </form>
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
  }

  onUpdate = (data, callback) => {
    this.setState({ data }, callback);
  };

  onSubmit = ev => {
    const formHasErrors = this.validation.getValidityForm();
    if (formHasErrors) {
      ev.preventDefault();
      this.validation.validate();
      return;
    }
  };
}

export default withStyles(styles)(EngineeringRetreatsPage);
