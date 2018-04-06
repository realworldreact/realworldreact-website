import React from 'react';

import Talk from './_talk';

const TalkImplementation = () => (
  <Talk>
    {{
      id: 'advanced-web-performance-optimizations',
      subtitle: (
        <div>
          <a href="https://www.twitter.com/kylemathews" target="_blank">
            Kyle Mathews
          </a>{' '}
          from{' '}
          <a
            href="https://www.gatsbyjs.org"
            target="_blank"
          >
            Gatsby
          </a>
        </div>
      ),
      videoUrl: 'https://www.youtube.com/embed/HQEotVfTXwk',
      content: (
        <div>
          <p>
            As web developers, we have incredible demands placed upon us. Expectations for the quality of websites are remarkably high, and continue to rise. Not only must websites be feature-rich and robust, they must load and run quickly on a near-infinite variety of devices and browsers all around the world. Oh, and do it with limited team members on an aggressive timeline. Come join Kyle Mathews, founder of Gatsby, as he talks about modern web performance. You'll learn the tools & techniques you can start using today to make your React sites super fast. We’ll discuss code splitting, link preload, greedy prefetching, header optimizations, service workers, and more using Gatsby as a case study for these techniques.
          </p>
          <p>Presented at Reactathon 2018 in San Francisco.</p>
          <p style={{ fontSize: 14 }}>
            Kyle is a tech entrepreneur based in San Francisco, CA. He's founded several startups and is now helping build a next generation open source JavaScript website framework called Gatsby that blends the speed and simplicity of static sites with the rich tooling and client-side capabilities of React.js.
          </p>
        </div>
      ),
      specialties: ['react', 'jamstack']
    }}
  </Talk>
);

export default TalkImplementation;
