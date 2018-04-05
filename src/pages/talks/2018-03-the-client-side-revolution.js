import React from 'react';

import Talk from './_talk';

const TalkImplementation = () => (
  <Talk>
    {{
      id: 'the-client-side-revolution',
      subtitle: (
        <div>
          <a href="https://www.twitter.com/kylemathews" target="_blank">
            Kyle Mathews
          </a>{' '}
          from{' '}
          <a href="https://www.gatsbyjs.org/" target="_blank">
            Gatsby
          </a>
        </div>
      ),
      videoUrl: 'https://www.youtube.com/embed/Bq31S6h6TwE',
      content: (
        <div>
          <p>
            Building websites has changed dramatically over the last few years. In this session we’ll go on a history trip to discover where we came from, why React is a such a big deal, and where we might be going soon. We’ll discuss what a website is and why we use the tools we do to build them and how this is the best of all times to be building for the web.
          </p>
          <p>
            Presented at Reactathon 2018 in San Francisco.
          </p>
          <p style={{ fontSize: 14 }}>
            Kyle is a tech entrepreneur based in San Francisco, CA. He's founded several startups and is now helping build a next generation open source JavaScript website framework called Gatsby that blends the speed and simplicity of static sites with the rich tooling and client-side capabilities of React.js.
          </p>
        </div>
      ),
      specialties: ['react']
    }}
  </Talk>
);

export default TalkImplementation;
