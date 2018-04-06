import React from 'react';

import Talk from './_talk';

const TalkImplementation = () => (
  <Talk>
    {{
      id: 'the-fundamentals-of-redux',
      subtitle: (
        <div>
          <a href="https://www.twitter.com/acemarke" target="_blank">
            Mark Erikson
          </a>{' '}
          from{' '}
          <a
            href="http://www.northropgrumman.com/Careers/Job-Search/Pages/default.aspx"
            target="_blank"
          >
            Northrop Grumman
          </a>
        </div>
      ),
      videoUrl: 'https://www.youtube.com/embed/ewelU8WHXQ4',
      content: (
        <div>
          <p>
            Redux is the most widely-used state management library for React
            applications, and has spread throughout the Javascript ecosystem.
            However, the learning curve can be steep for many people. Come join
            Redux co-maintainer Mark Erikson as we talk about the core concepts
            of Redux, how to use Redux with React, and how Redux was designed to
            make Javascript applications predictable.
          </p>
          <p>Presented at Reactathon 2018 in San Francisco.</p>
          <p style={{ fontSize: 14 }}>
            Mark is a software engineer living in southwest Ohio, USA, where he
            patiently awaits the annual heartbreak from the Reds and the
            Bengals. Mark is a Redux maintainer, author of the Redux FAQ,
            maintains the React/Redux Links list and Redux Addons Catalog,
            tweets at @acemarke, and blogs at http://blog.isquaredsoftware.com.
            He can be usually found in the Reactiflux chat channels, answering
            questions about React and Redux.
          </p>
        </div>
      ),
      specialties: ['react', 'redux']
    }}
  </Talk>
);

export default TalkImplementation;
