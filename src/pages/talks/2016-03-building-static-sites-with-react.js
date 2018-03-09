import React from 'react';
import withStyles from 'react-jss';

import Talk from './_talk';

const styles = theme => ({
  root: {
    width: '100%'
  }
});

const BuildingStaticSites = ({ classes }) => (
  <Talk>
    {{
      title: 'Building Static Sites with React',
      subtitle: (
        <div>
          Ian Sinnott <span>from</span> TruSTAR Technologies
        </div>
      ),
      videoUrl: 'https://www.youtube.com/embed/_1k2HEPH6fY',
      content: (
        <div>
          <p>
            React.js is an exciting technology for the web that is also making
            it easier to write native, cross-platform applications. In this
            talk, Ian Sinnott of TruSTAR Technologies discusses building static,
            serverless sites using the full power of React.
          </p>
          <p>
            Presented at the March 2016 Real World React meetup at Deco Software
            in San Francisco, CA.
          </p>
        </div>
      ),
      specialties: ['react-native', 'graphql', 'aws-lambda', 'microsoft-azure'],
      nextTalk: {
        name: 'Building Static Sites with React',
        url: '/talks/2016-03-building-static-sites-with-react'
      }
    }}
  </Talk>
);

export default withStyles(styles)(BuildingStaticSites);
