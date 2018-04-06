import React from 'react';

import Talk from './_talk';

const TalkImplementation = () => (
  <Talk>
    {{
      id: 'motion-in-javascript',
      subtitle: (
        <div>
          <a href="https://www.twitter.com/kaylie_alexa" target="_blank">
            Kaylie Kwon
          </a>{' '}
          from{' '}
          <a
            href="https://www.eventbrite.com/careers/"
            target="_blank"
          >
            Eventbrite
          </a>
        </div>
      ),
      videoUrl: 'https://www.youtube.com/embed/i03rQ0SiscQ',
      content: (
        <div>
          <p>
            You may have heard of CSS in JS, but what alternatives are there for implementing interactive motions in JS? This talk will be a comparison of several approaches from using vanilla Javascript to libraries like Anime.js and Popmotion, as well as ones in React ecosystem like React Transition Group and React Motion.
          </p>
          <p>Presented at Reactathon 2018 in San Francisco.</p>
          <p style={{ fontSize: 14 }}>
            Kaylie is a frontend engineer at Eventbrite from San Francisco, who loves all things related to devtools and open source.
          </p>
        </div>
      ),
      specialties: ['react']
    }}
  </Talk>
);

export default TalkImplementation;
