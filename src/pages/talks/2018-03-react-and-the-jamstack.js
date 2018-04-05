import React from 'react';

import Talk from './_talk';

const TalkImplementation = () => (
  <Talk>
    {{
      id: 'react-and-the-jamstack',
      subtitle: (
        <div>
          <a href="https://www.twitter.com/biilmann" target="_blank">
            Matt Biilmann
          </a>{' '}
          from{' '}
          <a href="https://www.netlify.com" target="_blank">
            Netlify
          </a>
        </div>
      ),
      videoUrl: 'https://www.youtube.com/embed/ZF9pE2suBZs',
      content: (
        <div>
          <p>
            The JAMstack is revolutionzing how modern websites and applications
            are built. Learn how to leverage your JavaScript, APIs, and Markup
            to make your web apps faster, less expensive, more secure, and
            infinitely scalable.
          </p>
          <p>Presented at Reactathon 2018 in San Francisco.</p>
          <p style={{ fontSize: 14 }}>
            Matt is regarded as one of the driving forces behind the resurgence
            of static websites and is a founder at Netlify, the fastest growing
            automation platform for modern websites. Matt has lead the
            development of all of 3 commercial CMS (swears he won’t do a
            fourth), has written production code in more than a dozen
            programming languages, is trilingual and enjoys listening to beer
            and drinking modern jazz.
          </p>
        </div>
      ),
      specialties: ['jamstack', 'react']
    }}
  </Talk>
);

export default TalkImplementation;
