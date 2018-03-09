import React from 'react';
import withStyles from 'react-jss';
import cx from 'classnames';
import { navigateTo } from 'gatsby-link';

import trainers from '../../data/trainers.json';
import { Heading, Tabs, Button } from '../../components';
import styles from './styles';

const Team = props => {
  const { classes, className } = props;
  return (
    <div className={cx(classes.root, className, 'row')}>
      <div className={cx(classes.teamHeader, 'col-xs-12')}>
        <Heading
          className={classes.teamHeading}
          title="T E A M"
          subtitle="Expert consultants and trainers"
        />
      </div>
      <div className="col-xs-12">
        <div className={classes.teamMobile}>
          {trainers.map(trainer => (
            <div
              className={classes.teamItem}
              key={trainer.name}
              onClick={() => navigateTo('/team')}
            >
              <div
                className={classes.teamItemImage}
                style={{ backgroundImage: `url(${trainer.photoMini})` }}
              />
              <Button
                className={classes.teamItemBtn}
                palette="text"
                textAlign="left"
                size={44}
                showArrow
                href="/team"
              >
                {trainer.name}
              </Button>
            </div>
          ))}
        </div>
        <div className={classes.teamDesktop}>
          <Tabs className={classes.teamDesktop} border>
            {trainers.map(trainer => ({
              name: trainer.name,
              content: trainer.description,
              optionImage: trainer.photoMini
            }))}
          </Tabs>
          <div className="row">
            <div className={cx(classes.teamEnter, 'col-xs-12 col-sm-8')}>
              <Button
                href="/team"
                palette="black"
                textAlign="left"
                outline
                showArrow
              >
                Learn more about Our Team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withStyles(styles)(Team);
