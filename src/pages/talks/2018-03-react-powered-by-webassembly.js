import React from 'react';

import Talk from './_talk';

const TalkImplementation = () => (
  <Talk>
    {{
      id: 'react-powered-by-webassembly',
      subtitle: (
        <div>
          <a href="https://www.twitter.com/_jayphelps" target="_blank">
            Jay Phelps
          </a>{' '}
          from{' '}
          <a
            href="https://www.thisdot.co"
            target="_blank"
          >
            This Dot Media
          </a>
        </div>
      ),
      videoUrl: 'https://www.youtube.com/embed/s2ccNDxRqpo',
      content: (
        <div>
          <p>
            WebAssembly (aka wasm) is a new, standardized compilation target for the web, available in all modern browsers. But since it's so low level it can be difficult to see how it will revolutionize the future generations of React apps and potentially even power React itself. In this talk Jay will reveal what it is, how you can use it today, and the incredible opportunities it will continue to unlock.
          </p>
          <p>Presented at Reactathon 2018 in San Francisco.</p>
          <p style={{ fontSize: 14 }}>
            Reactive programming nut and compiler enthusiast. Jay is a Senior Software Engineer at This Dot Media. Lover of all things open source, his contributions span numerous ecosystems. Former RxJS core team member and author of core-decorators, git-blame-someone-else, and co-author of redux-observable.
          </p>
        </div>
      ),
      specialties: ['react', 'wasm']
    }}
  </Talk>
);

export default TalkImplementation;
