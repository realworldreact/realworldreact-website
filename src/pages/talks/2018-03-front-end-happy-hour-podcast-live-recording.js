import React from 'react';

import Talk from './_talk';

const TalkImplementation = () => (
  <Talk>
    {{
      id: 'front-end-happy-hour-podcast-live-recording',
      subtitle: (
        <div>
          <a href="https://www.twitter.com/FrontEndHH" target="_blank">
            Front-end Happy Hour Podcast
          </a>{' '}
          from{' '}
          <a href="http://frontendhappyhour.com/" target="_blank">
            Various Companies
          </a>
        </div>
      ),
      videoUrl: 'https://www.youtube.com/embed/MRnqnt2ZJ7w',
      content: (
        <div>
          <p>
            Join senior front-end engineers Ryan Burgess, Mars Jullian, Jem
            Young, Stacy London, and Derrick Showers as they discuss strategies
            for scaling React applications
          </p>
          <p>Presented at Reactathon 2018 in San Francisco.</p>
          <p style={{ fontSize: 14 }}>
            A podcast featuring panelists of engineers from Netflix, Evernote,
            Atlassian & LinkedIn talking over drinks about all things Front End
            development.
          </p>
        </div>
      ),
      specialties: ['react']
    }}
  </Talk>
);

export default TalkImplementation;
