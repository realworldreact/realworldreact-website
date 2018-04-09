import React from 'react';

import Talk from './_talk';

const TalkImplementation = () => (
  <Talk>
    {{
      id: 'reactathon-day-2-keynote',
      subtitle: (
        <div>
          <a href="https://twitter.com/nparashuram" target="_blank">
            Ram Narasimhan
          </a>{' '}
          from{' '}
          <a href="https://www.facebook.com/careers/" target="_blank">
            Facebook
          </a>
        </div>
      ),
      videoUrl: 'https://www.youtube.com/embed/1hvQ8p8q0a0',
      content: (
        <div>
          <p>
            Over the last two years, React Native has helped many developers
            quickly build high quality, mobile applications targeting multiple
            platforms. The community and the ecosystem of plugins and tooling
            around the technology has also helped many developers bring in all
            the functionality previously available only to native developers. In
            this talk, we will look at the current state of React Native and
            discuss the common pain points developers have. The talk will also
            summarize some of the discussions in the React Native core team and
            new ideas being tried out. We will cover the rationale behind
            efforts like moving documentation to a separate repo, reducing the
            surface area of the API, etc. Based on the work done by the
            contributors, we will map out what it may mean for React Native to
            hit a symbolic 1.0 release.
          </p>
          <p>Presented at Reactathon 2018 in San Francisco.</p>
          <p style={{ fontSize: 14 }}>
            Parashuram (Ram) is a front end engineer on the React Native Core
            team. Most of his work has been around organizing the next set of
            investments that should be made to ensure React Native continues to
            support its open source work. He has contributed to Maya-kai, a
            gesture mirroring system for RN, CodePush, Mobile Center (now App
            Center), and also wrote the VSCode RN debugger, among others.
          </p>
        </div>
      ),
      specialties: ['react-native']
    }}
  </Talk>
);

export default TalkImplementation;
