import React from 'react';

import Talk from './_talk';

const BuildingStaticSites = () => (
  <Talk>
    {{
      id: 'isomorphic-react-without-node',
      title: 'Building Static Sites with React',
      subtitle: (
        <div>
          <a href="https://www.iansinnott.com" target="_blank">
            Ian Sinnott
          </a>{' '}
          from
          <a href="https://www.trustar.co" target="_blank">
            TruSTAR Technologies
          </a>
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
      specialties: ['react-native', 'graphql', 'aws-lambda', 'microsoft-azure']
    }}
  </Talk>
);

export default BuildingStaticSites;
