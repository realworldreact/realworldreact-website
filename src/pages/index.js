import React from 'react';
import Helmet from 'react-helmet';
import withStyles from 'react-jss';
import cx from 'classnames';

import imagePatternDots from '../assets/images/patterns/dots.png';
import imagePatternOrbit from '../assets/images/patterns/orbit.png';
import imageProblem from '../assets/images/home/problem.png';
import imageSolution from '../assets/images/home/solution.png';
import imageBenefits from '../assets/images/home/benefits.png';
import technologies from '../data/technologies.json';
import {
  Header,
  Footer,
  Drops,
  TechnologyLogo,
  Tabs,
  ImageText
} from '../components';
import { Contact, SignUp } from '../containers';

const styles = theme => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column'
  },

  // HERO
  hero: {
    backgroundColor: theme.palette.inverted.base,
    backgroundImage: `url(${imagePatternDots})`
  },
  heading: {
    position: 'relative',
    margin: 'auto',
    padding: [0, 20],
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    '& h1': {
      fontSize: 24
    }
  },
  headingFooter: {
    position: 'absolute',
    left: 0,
    bottom: -70,
    width: '100%',
    fontFamily: theme.typography.secondary,
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#fff',
    fontWeight: 300
  },

  // MAIN
  main: {
    flex: '1'
  },

  // LOGOS
  logos: {
    marginTop: 40,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  technologyLogo: {
    width: '50%'
  },

  // SERVICES
  services: {
    position: 'relative',
    padding: [20, 0]
  },
  servicesBackground: {
    position: 'relative',
    zIndex: 1,
    display: 'none',
    width: '100%',
    userSelect: 'none'
  },
  servicesContent: {
    zIndex: 2,
    width: '100%',
    padding: [0, 20]
  },
  servicesHeading: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 20
  },
  servicesTitle: {
    display: 'block',
    overflow: 'hidden',
    marginLeft: 'auto',
    width: '100%',
    height: 80,
    fontSize: 80,
    fontWeight: 'bold',
    lineHeight: '1',
    textAlign: 'justify',
    textTransform: 'uppercase',
    '&:after': {
      content: '""',
      display: 'inline-block',
      width: '100%'
    }
  },
  servicesSection: {
    '& + &': {
      marginTop: 20
    }
  },

  // FOOTER
  footer: {
    backgroundColor: theme.palette.inverted.base,
    backgroundImage: `url(${imagePatternDots})`
  },
  footerDrops: {
    display: 'none'
  },

  // extra small +
  '@media screen and (min-width: 30em)': {
    // SERVICES
    servicesTitle: {
      width: 320,
      height: 100,
      fontSize: 100
    }
  },

  // small +
  '@media screen and (min-width: 48em)': {
    // HERO
    heading: {
      padding: [80, 20, 0],
      width: '76%',
      '& h1': {
        fontSize: 32
      }
    },
    headingFooter: {
      bottom: -100
    },

    // LOGOS
    logos: {
      marginTop: 40,
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    technologyLogo: {
      width: '14.28%'
    },

    // SERVICES
    servicesBackground: {
      display: 'block',
      minHeight: 900
    },
    servicesContent: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)'
    },

    // FOOTER
    footerDrops: {
      display: 'block'
    }
  },

  // medium +
  '@media screen and (min-width: 64em)': {
    // SERVICES
    servicesBackground: {
      minHeight: 750
    }
  }
});

const HomePage = ({ classes }) => (
  <div>
    <Helmet>
      <title>Real World React</title>
    </Helmet>
    <div className={classes.root}>
      {/* HERO */}
      <div className={classes.hero}>
        <Header reversed />
        <div className="container">
          <div className={classes.heading}>
            <h1>
              We are a professional services and consulting firm specializing in{' '}
              <span className="text-inverted background-secondary">
                &nbsp;modern front-end tools&nbsp;
              </span>{' '}
              and serverless architecture.
            </h1>
            <div className={classes.headingFooter}>
              Fig. 1 - Our fields of speciality
            </div>
          </div>
        </div>
        <Drops />
      </div>

      {/* MAIN */}
      <div className={classes.main}>
        {/* LOGOS */}
        <div className={cx(classes.logos, 'container')}>
          {technologies.map((item, key) => (
            <div key={key} className={classes.technologyLogo}>
              <TechnologyLogo
                name={item.name}
                logo={item.logo}
                route={item.route}
              />
            </div>
          ))}
        </div>

        {/* SERVICES */}
        <div className={classes.services}>
          <img className={classes.servicesBackground} src={imagePatternOrbit} />
          <div className={classes.servicesContent}>
            <div className="container">
              <div className="row">
                <div className={cx(classes.servicesHeading, 'col-xs-12')}>
                  <div className={classes.servicesTitle}>S E R V</div>
                  <div className={classes.servicesTitle}>I C E S</div>
                </div>
              </div>
              <Tabs>
                {[
                  {
                    name: 'Training',
                    href: '/training',
                    enterText: 'Learn more about Training',
                    content: (
                      <div>
                        <ImageText
                          className={classes.servicesSection}
                          image={imageProblem}
                          subtitle="Problem"
                          stackOnMobile
                        >
                          We believe that learning a new technology should
                          increase your productivity, not decrease it. Yet
                          oftentimes we spend days, weeks, or sometimes months
                          coming to grips with a new technology that promises to
                          deliver something that we may never fully achieve.
                          Oftentimes we waste a lot of time just figuring stuff
                          out, or worse – we’re stuck with sunk costs, project
                          fragmentation, and technical debt.
                        </ImageText>
                        <ImageText
                          className={classes.servicesSection}
                          image={imageSolution}
                          subtitle="Solution"
                          stackOnMobile
                        >
                          We believe there’s a better way. Our battle-tested
                          curriculum will send your engineers through a
                          hyperloop of productivity. Our instructors are
                          full-time developers who have been using their
                          respective technologies for years, and continue to
                          code with them every day. They also have years of
                          experience training engineers to learn modern
                          development tools like React and Redux.
                        </ImageText>
                        <ImageText
                          className={classes.servicesSection}
                          image={imageBenefits}
                          subtitle="Benefit"
                          stackOnMobile
                        >
                          There is no better way to learn a new technology than
                          a professionally-instructed, in-person workshop.
                        </ImageText>
                      </div>
                    )
                  },
                  {
                    name: 'Consulting',
                    href: '/consulting',
                    enterText: 'Learn more about Consulting',
                    content: (
                      <div>
                        <p className={classes.servicesSection}>
                          As technologists, it’s all too easy to get decision
                          fatigue. Fancy new solutions promise to solve our
                          technical and business problems. But what is the best
                          choice, and why? Will heading down one path get you in
                          trouble 2 years from now? What are the trade-offs
                          between Angular and React? What is the cost of not
                          changing from your current stack?
                        </p>
                        <p className={classes.servicesSection}>
                          We can help you to answer these questions and more.
                          With expert advice, code reviews, and one-on-one
                          coding assistance, we’ll guide you through the process
                          to modernize your stack, lower costs, increase your
                          productivity, improve performance, and increase
                          developer happiness.
                        </p>
                        <p className={classes.servicesSection}>
                          Don’t just learn about the technologies redefining
                          tomorrow’s infrastructure – learn why they will save
                          you money and even help you attract new talent, today.
                        </p>
                      </div>
                    )
                  },
                  {
                    name: 'Remote Placement',
                    href: '/remote-placement',
                    enterText: 'Learn more about Remote Placement',
                    content: (
                      <div>
                        <p className={classes.servicesSection}>
                          Let’s face it – hiring is hard. It’s even more
                          difficult when you have to pay recruiters upwards of
                          25% first-year salary. In this modern connected world,
                          why should we limit our tech employees to those
                          physically present at our office?
                        </p>
                        <p className={classes.servicesSection}>
                          With offices in New York, Quito, and Medellin, our
                          engineering partners at JobSity give you the
                          short-term or long-term development assistance that
                          you need. We select candidates from the top 1% of
                          applicants and send them through a comprehensive
                          training program. To further vet the talent and
                          culture fit, engineers will go through your company’s
                          internal hiring process and work under your
                          management.
                        </p>
                        <p className={classes.servicesSection}>
                          Expand your team today with high quality remote
                          engineers – without the recruiter’s fee.
                        </p>
                      </div>
                    )
                  },
                  {
                    name: 'Engineering Retreats',
                    href: '/engineering-retreats',
                    enterText: 'Learn more about Engineering Retreats',
                    content: (
                      <div>
                        <p className={classes.servicesSection}>
                          We believe that offsite retreats should be as
                          productive as they are fun. But all too often retreats
                          fail at both: productivity is stymied by a lack of
                          fresh perspective, and the fun is tainted by your
                          inability to be productive.
                        </p>
                        <p className={classes.servicesSection}>
                          With React Retreat, our consultants offer fresh
                          perspective and insight into the technical problems
                          you are experiencing, and provide you with an
                          actionable strategy to implement a solution. We’ll
                          seamlessly blend our consulting and training services
                          with team-building activities that appeal to your
                          engineering team – to ensure both productivity and
                          fun.
                        </p>
                        <p className={classes.servicesSection}>
                          Bring your engineers closer together while solving
                          your toughest engineering challenges, today.
                        </p>
                      </div>
                    )
                  }
                ]}
              </Tabs>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className={classes.footer}>
        <div className={classes.footerDrops}>
          <Drops bottom />
        </div>
        <Footer footerContent={<SignUp />} headerContent={<Contact />} />
      </div>
    </div>
  </div>
);

export default withStyles(styles)(HomePage);
