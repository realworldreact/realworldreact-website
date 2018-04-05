import React from 'react';

import Talk from './_talk';

const TalkImplementation = () => (
  <Talk>
    {{
      id: 'why-react',
      subtitle: (
        <div>
          <a href="http://www.benmvp.com/" target="_blank">
            Ben Ilegbodu
          </a>{' '}
          from{' '}
          <a href="https://www.eventbrite.com/careers/" target="_blank">
            Eventbrite
          </a>
        </div>
      ),
      videoUrl: 'https://www.youtube.com/embed/Wfec35hSALc',
      content: (
        <div>
          <p>
            As the Frontend Platform team at Eventbrite switched from Backbone/Marionette over to React, it had to convince other developers, managers, directors, and non-engineers that React was the right path. And the rationale for moving wasn’t just because React is insanely popular. There are many tangible benefits that make the effort of migrating worthwhile. New to React and want to learn a little about how it works? Seeking ammunition to convince your team to make the change? Come learn about why we made the decision to transition to React, through an introduction of how to build user interactions with React.
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
