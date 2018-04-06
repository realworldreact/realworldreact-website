import React from 'react';

import Talk from './_talk';

const TalkImplementation = () => (
  <Talk>
    {{
      id: 'vertical-redux-architecture',
      subtitle: (
        <div>
          <a href="https://www.twitter.com/berkeleytrue" target="_blank">
            Berkeley Martinez
          </a>{' '}
          from{' '}
          <a
            href="https://www.freecodecamp.org"
            target="_blank"
          >
            freeCodeCamp.org
          </a>
        </div>
      ),
      videoUrl: 'https://www.youtube.com/embed/2n5ms2Sksek',
      content: (
        <div>
          <p>
            At freeCodeCamp, we've built a large Redux app with lots of moving parts. But building large scale Redux apps can get quite frustrating. In this talk we'll cover some rules to mitigate common issues seen in large apps, structural guidelines inspired by Clojure(Script) frameworks, and Redux theory of actions as events that help keep your large app transparent and manageable.
          </p>
          <p>Presented at Reactathon 2018 in San Francisco.</p>
          <p style={{ fontSize: 14 }}>
            Berkeley is a San Francisco native and the CTO of freeCodeCamp.org, where students learn full-stack web development for free. He is also the author of Redux-Epic, a library built to do better async and server-side rendering in React with RxJS Observables. Previously, Berkeley worked as a professional consultant and instructor with Real World Reacton and over two years trained engineers from Twilio, Amazon, OpenTable, Pinterest, Netflix, and more.
          </p>
        </div>
      ),
      specialties: ['redux']
    }}
  </Talk>
);

export default TalkImplementation;
