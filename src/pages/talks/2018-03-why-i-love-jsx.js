import React from 'react';

import Talk from './_talk';

const TalkImplementation = () => (
  <Talk>
    {{
      id: 'why-i-love-jsx',
      subtitle: (
        <div>
          <a href="https://twitter.com/_jayphelps" target="_blank">
            Jay Phelps
          </a>{' '}
          from{' '}
          <a href="https://www.thisdot.co/" target="_blank">
            This Dot Media
          </a>
        </div>
      ),
      videoUrl: 'https://www.youtube.com/embed/IL-J3pLIAok',
      content: (
        <div>
          <p>
            JSX is an XML-like syntax extension to JavaScript, popularized by
            React. When seen for the first time it can often elicit bad memories
            of intermixing HTML and code, but JSX is *very* different! Let's
            learn exactly what it is, how it works, and even how you can use it
            outside of React.
          </p>
          <p>Presented at Reactathon 2018 in San Francisco.</p>
          <p style={{ fontSize: 14 }}>
            Reactive programming nut and compiler enthusiast. Jay is a Senior
            Software Engineer at This Dot Media. Lover of all things open
            source, his contributions span numerous ecosystems. Former RxJS core
            team member and author of core-decorators, git-blame-someone-else,
            and co-author of redux-observable.
          </p>
        </div>
      ),
      specialties: ['react', 'jsx']
    }}
  </Talk>
);

export default TalkImplementation;
