import React from 'react';
import Helmet from 'react-helmet';
import withStyles from 'react-jss';
import cx from 'classnames';

import imagePatternDots from '../assets/images/patterns/dots.png';
import imageOrbit from '../assets/images/home/orbit.svg';
import imageProblem from '../assets/images/home/problem.png';
import imageSolution from '../assets/images/home/solution.png';
import imageBenefits from '../assets/images/home/benefits.png';
import imageTalks from '../assets/images/home/talks.png';
import imagePodcast from '../assets/images/home/podcast.png';
import imageUpcomingEvents from '../assets/images/home/upcoming-events.png';
import imageBlog from '../assets/images/home/blog.png';
import imageTechAndMore from '../assets/images/home/and-more.jpg';

import technologies from '../data/technologies.json';
import navigation from '../data/navigation.json';
import {
  Header,
  Footer,
  Drops,
  TechnologyLogo,
  Tabs,
  ImageText,
  Resource
} from '../components';
import { Contact, SignUp } from '../containers';

// Select the first 13 elements in the list of technology logos
// becuse we need to fit them in the layout.
const selectedTechnologyLogos = technologies.slice(0, 13);

// Get the links from navigation data.
const linksResources = navigation.find(items => items.id === 'resources');
const linkBlog = linksResources.items.find(item => item.id === 'blog');

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
  heroHeading: {
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
  heroFooter: {
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
  logosItem: {
    width: '50%',
    marginBottom: 25
  },

  // SERVICES
  services: {
    overflow: 'hidden',
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

  // RESOURCES
  resources: {
    padding: [40, 20]
  },
  resourcesItem: {
    marginBottom: 20
  },
  resourcesTitle: {
    marginBottom: 10,
    textAlign: 'center',
    fontFamily: theme.typography.secondary
  },
  resourcesLine: {
    position: 'absolute',
    borderStyle: 'solid',
    borderColor: '#c9cacc'
  },
  resourcesLines: {
    position: 'relative',
    height: 30
  },
  resourcesLineBase: {
    width: 0,
    height: 30,
    borderWidth: '0 1px 0 0',
    right: '50%',
    top: 0,
    transition: 'translateX(-50%)'
  },
  resourcesLineHorizontal: {
    borderWidth: '0'
  },
  resourcesLine1: {
    borderWidth: '0'
  },
  resourcesLine2: {
    borderWidth: '0'
  },
  resourcesLine3: {
    borderWidth: '0'
  },
  resourcesLine4: {
    borderWidth: '0'
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
    heroHeading: {
      padding: [80, 20, 0],
      width: '76%',
      '& h1': {
        fontSize: 32
      }
    },
    heroFooter: {
      bottom: -100
    },

    // LOGOS
    logos: {
      marginTop: 40,
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap'
    },
    logosItem: {
      width: '14.28%',
      marginBottom: 45
    },

    // SERVICES
    servicesBackground: {
      display: 'block',
      marginLeft: '-10%',
      minHeight: 920,
      width: '120%'
    },
    servicesContent: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)'
    },

    // RESOURCES
    resourcesLines: {
      height: 60
    },
    resourcesLineHorizontal: {
      borderWidth: '0 0 1px',
      top: 30,
      left: '25%',
      right: '25%'
    },
    resourcesLine1: {
      borderWidth: '0 1px 0 0',
      height: 30,
      top: 30,
      left: '25%'
    },
    resourcesLine2: {
      borderWidth: '0 1px 0 0',
      height: 30,
      top: 30,
      right: '25%'
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
    },

    // RESOURCES
    resourcesTitle: {
      marginRight: '12.5%',
      textAlign: 'right'
    },
    resourcesLineBase: {
      right: '20%',
      transform: 'none'
    },
    resourcesLineHorizontal: {
      left: '12.5%',
      right: '12.5%'
    },
    resourcesLine1: {
      borderWidth: '0 1px 0 0',
      height: 30,
      top: 30,
      left: '12.5%'
    },
    resourcesLine2: {
      borderWidth: '0 1px 0 0',
      height: 30,
      top: 30,
      left: '37.5%',
      right: 'auto'
    },
    resourcesLine3: {
      borderWidth: '0 1px 0 0',
      height: 30,
      top: 30,
      left: '62.5%'
    },
    resourcesLine4: {
      borderWidth: '0 1px 0 0',
      height: 30,
      top: 30,
      right: '12.5%'
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
        <Header reversed showHomeLink={false} />

        <div className="container">
          <div className={classes.heroHeading}>
            <h1>
              We are a professional services and consulting firm specializing in{' '}
              <span className="text-inverted background-secondary">
                &nbsp;modern front-end tools&nbsp;
              </span>{' '}
              and serverless architecture.
            </h1>
            <div className={classes.heroFooter}>
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
          {selectedTechnologyLogos.map((item, key) => (
            <div key={key} className={classes.logosItem}>
              <TechnologyLogo
                name={item.name}
                logo={item.logo}
                route={item.route}
              />
            </div>
          ))}
          <div className={classes.logosItem}>
            <TechnologyLogo name="And more" logo={imageTechAndMore} />
          </div>
        </div>

        {/* SERVICES */}
        <div className={classes.services}>
          <img className={classes.servicesBackground} src={imageOrbit} />
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
                        <ImageText
                          className={classes.servicesSection}
                          image={imageProblem}
                          subtitle="Problem"
                          stackOnMobile
                        >
                          As technologists, it’s all too easy to get decision
                          fatigue. Fancy new solutions promise to solve our
                          technical and business problems. But what is the best
                          choice, and why? Will heading down one path get you in
                          trouble 2 years from now? What are the trade-offs
                          between Angular and React? What is the cost of not
                          changing from your current stack?
                        </ImageText>
                        <ImageText
                          className={classes.servicesSection}
                          image={imageSolution}
                          subtitle="Solution"
                          stackOnMobile
                        >
                          We can help you to answer these questions and more.
                          With expert advice, code reviews, and one-on-one
                          coding assistance, we’ll guide you through the process
                          to modernize your stack, lower costs, increase your
                          productivity, improve performance, and increase
                          developer happiness.
                        </ImageText>
                        <ImageText
                          className={classes.servicesSection}
                          image={imageBenefits}
                          subtitle="Benefit"
                          stackOnMobile
                        >
                          Don’t just learn about the technologies redefining
                          tomorrow’s infrastructure – learn why they will save
                          you money and even help you attract new talent, today.
                        </ImageText>
                      </div>
                    )
                  },
                  {
                    name: 'Remote Placement',
                    href: '/remote-placement',
                    enterText: 'Learn more about Remote Placement',
                    content: (
                      <div>
                        <ImageText
                          className={classes.servicesSection}
                          image={imageProblem}
                          subtitle="Problem"
                          stackOnMobile
                        >
                          Let’s face it – hiring is hard. It’s even more
                          difficult when you have to pay recruiters upwards of
                          25% first-year salary. In this modern connected world,
                          why should we limit our tech employees to those
                          physically present at our office?
                        </ImageText>
                        <ImageText
                          className={classes.servicesSection}
                          image={imageSolution}
                          subtitle="Solution"
                          stackOnMobile
                        >
                          With offices in New York, Quito, Cartagena, and
                          Medellin, our engineering partners at JobSity give you
                          the short-term or long-term development assistance
                          that you need. We select candidates from the top 1% of
                          applicants and send them through a comprehensive
                          training program. To further vet the talent and
                          culture fit, engineers will go through your company’s
                          internal hiring process and work under your
                          management.
                        </ImageText>
                        <ImageText
                          className={classes.servicesSection}
                          image={imageBenefits}
                          subtitle="Benefit"
                          stackOnMobile
                        >
                          Expand your team today with high quality remote
                          engineers – without the recruiter’s fee.
                        </ImageText>
                      </div>
                    )
                  },
                  {
                    name: 'Engineering Retreats',
                    href: '/engineering-retreats',
                    enterText: 'Learn more about Engineering Retreats',
                    content: (
                      <div>
                        <ImageText
                          className={classes.servicesSection}
                          image={imageProblem}
                          subtitle="Problem"
                          stackOnMobile
                        >
                          We believe that offsite retreats should be as
                          productive as they are fun. But all too often retreats
                          fail at both: productivity is stymied by a lack of
                          fresh perspective, and the fun is tainted by your
                          inability to be productive.
                        </ImageText>
                        <ImageText
                          className={classes.servicesSection}
                          image={imageSolution}
                          subtitle="Solution"
                          stackOnMobile
                        >
                          With React Retreat, our consultants offer fresh
                          perspective and insight into the technical problems
                          you are experiencing, and provide you with an
                          actionable strategy to implement a solution. We’ll
                          seamlessly blend our consulting and training services
                          with team-building activities that appeal to your
                          engineering team – to ensure both productivity and
                          fun.
                        </ImageText>
                        <ImageText
                          className={classes.servicesSection}
                          image={imageBenefits}
                          subtitle="Benefit"
                          stackOnMobile
                        >
                          Bring your engineers closer together while solving
                          your toughest engineering challenges, today.
                        </ImageText>
                      </div>
                    )
                  }
                ]}
              </Tabs>
            </div>
          </div>
        </div>
      </div>

      {/* RESOURCES */}
      <div className={classes.resources}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className={classes.resourcesTitle}>
                Fig 2. - Other Resources
              </div>
              <div className={classes.resourcesLines}>
                <div
                  className={cx(
                    classes.resourcesLine,
                    classes.resourcesLineBase
                  )}
                />
                <div
                  className={cx(
                    classes.resourcesLine,
                    classes.resourcesLineHorizontal
                  )}
                />
                <div
                  className={cx(classes.resourcesLine, classes.resourcesLine1)}
                />
                <div
                  className={cx(classes.resourcesLine, classes.resourcesLine2)}
                />
                <div
                  className={cx(classes.resourcesLine, classes.resourcesLine3)}
                />
                <div
                  className={cx(classes.resourcesLine, classes.resourcesLine4)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-3">
              <Resource
                className={classes.resourcesItem}
                image={imageTalks}
                title="00 Talks"
                content="Watch technical talks from the experts we've featured at our conferences and meetups."
                enterText="See all talks"
                href="/talks"
              />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <Resource
                className={classes.resourcesItem}
                image={imagePodcast}
                title="01 Podcast"
                content="Learn how companies made the switch to React on our podcast, React Profiles."
                enterText="See all podcasts"
                href="/podcast"
              />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <Resource
                className={classes.resourcesItem}
                image={imageUpcomingEvents}
                title="02 Upcoming Events"
                content="See what events we've got in the works."
                enterText="See all upcoming events"
                href="/events"
              />
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3">
              <Resource
                className={classes.resourcesItem}
                image={imageBlog}
                title="03 Blog"
                content="Learn what we've been up to from our latest blog posts on Medium."
                enterText="See blog"
                href={linkBlog.route}
              />
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
