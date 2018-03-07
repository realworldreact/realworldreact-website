import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import cx from 'classnames';

import styles from './styles';

const Trainer = props => {
  const {
    theme,
    sheet,
    classes,
    className,
    trainer,
    technologies,
    ...etc
  } = props;
  const {
    name,
    nickname,
    description,
    photo,
    twitter,
    github,
    specialties
  } = trainer;
  return (
    <article className={cx(classes.root, className)} {...etc}>
      <div className={classes.main}>
        <div className={classes.header}>
          <div className={classes.headerLeft} />
          <div className={classes.photoContainer}>
            <div className={classes.photo} />
          </div>
          <div className={classes.info}>
            <div className={classes.profile}>
              <h1 className={classes.name}>{name}</h1>
              <div className={classes.nickname}>"{nickname}"</div>
            </div>
            <div className={classes.social}>
              <a
                className={classes.socialItem}
                href={`https://twitter.com/${twitter}`}
                target="_blank"
                title="Twitter"
              >
                <i className="mdi mdi-twitter-circle" />
              </a>
              <a
                className={classes.socialItem}
                href={`https://github.com/${github}`}
                target="_blank"
                title="GitHub"
              >
                <i className="mdi mdi-github-circle" />
              </a>
            </div>
          </div>
        </div>
        <div className={classes.description}>{description}</div>
      </div>
      <div className={classes.footer}>
        <div className={classes.footerTitle}>Areas of Specialty</div>
        <div className={classes.tech}>
          {specialties.map((item, index) => {
            const tech = technologies.find(t => t.id === item);
            return (
              <div
                key={index}
                className={classes.logo}
                style={{ backgroundImage: `url(${tech.logo})` }}
                title={tech.name}
              />
            );
          })}
        </div>
      </div>
    </article>
  );
};

Trainer.propTypes = {
  /**
   * Trainer definition.
   */
  trainer: PropTypes.shape({
    name: PropTypes.string,
    nickname: PropTypes.string,
    description: PropTypes.string,
    photo: PropTypes.string,
    twitter: PropTypes.string,
    github: PropTypes.string,
    specialties: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,

  /**
   * List of technologies to get the trainer specialties data.
   * This is used to render the logos.
   */
  technologies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      logo: PropTypes.string
    })
  ).isRequired
};

export default withStyles(styles)(Trainer);
