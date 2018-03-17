import React from 'react';

import Talk from './_talk';

const TalkImplementation = () => (
  <Talk>
    {{
      id: 'building-static-sites-with-react',
      subtitle: (
        <div>
          <a href="https://www.iansinnott.com" target="_blank">
            Ian Sinnott
          </a>{' '}
          from{' '}
          <a href="https://www.trustar.co" target="_blank">
            TruSTAR Technologies
          </a>
        </div>
      ),
      videoUrl: 'https://www.youtube.com/embed/_1k2HEPH6fY',
      content: (
        <div>
          <p>
            This talk will focus on how we can use our existing knowledge of
            JavaScript and React to build rich static sites without the overhead
            of learning new technology. We can continue to leverage all the
            existing dev tools we know and love to build full React applications
            and then simply generate static files from our components. We’ll
            also discuss some options to add common server-side functionality to
            static sites without running a server.
          </p>
          <p>
            Presented at the March 2016 Real World React meetup at Deco Software
            in San Francisco, CA.
          </p>
        </div>
      ),
      specialties: ['react', 'redux', 'webpack']
    }}
  </Talk>
);

export default TalkImplementation;
