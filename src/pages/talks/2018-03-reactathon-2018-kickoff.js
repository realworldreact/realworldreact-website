import React from 'react';

import Talk from './_talk';

const TalkImplementation = () => (
  <Talk>
    {{
      id: 'reactathon-2018-kickoff',
      subtitle: (
        <div>
          <a href="https://briandouglas.me/" target="_blank">
            Brian Douglas
          </a>{' '}
          from{' '}
          <a href="https://github.com/about/careers" target="_blank">
            GitHub
          </a>
        </div>
      ),
      videoUrl: 'https://www.youtube.com/embed/knn364bssQU',
      content: (
        <div>
          <p>
            React revolutionized the way we build modern user interfaces. But before it took off, it was built to solve a few key problems when building apps for the web. In this short talk, we'll learn what those problems were and how React approached solving them.
          </p>
          <p>
            Presented at Reactathon 2018 in San Francisco.
          </p>
        </div>
      ),
      specialties: ['react']
    }}
  </Talk>
);

export default TalkImplementation;
