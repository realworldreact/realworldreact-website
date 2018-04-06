import React from 'react';

import Talk from './_talk';

const TalkImplementation = () => (
  <Talk>
    {{
      id: 'react-off-the-grid',
      subtitle: (
        <div>
          <a href="https://www.twitter.com/wisecobbler" target="_blank">
            Sophia Shoemaker
          </a>{' '}
          from{' '}
          <a
            href="https://www.fullstack.io"
            target="_blank"
          >
            FullStack.io
          </a>
        </div>
      ),
      videoUrl: 'https://www.youtube.com/embed/1vUaW4sEa7U',
      content: (
        <div>
          <p>
            Creating a React application for orphans in Ghana offered some unique challenges. Progressive Web Apps (PWAs) are more than just “cool” or “hip” — they can be really important for applications where the internet is spotty, if available at all. Learn why I chose React + AWS Lambda for a country with poor internet connectivity, and general lessons on the often messy and exciting world of creating offline applications.
          </p>
          <p>Presented at Reactathon 2018 in San Francisco.</p>
          <p style={{ fontSize: 14 }}>
            Sophia became addicted to React in 2014. She is a full stack developer but React is her technology of choice. When she isn't cobbling code, she can be found editing the Fullstack React Newsletter, flying in her husband's Beechcraft Bonanza and playing with her 2 kids. Connect with Sophia on Twitter at @wisecobbler.
          </p>
        </div>
      ),
      specialties: ['pwa', 'react']
    }}
  </Talk>
);

export default TalkImplementation;
