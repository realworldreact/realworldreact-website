import React from 'react';

import Talk from './_talk';

const TalkImplementation = () => (
  <Talk>
    {{
      id: 'sharing-code-between-react-and-react-native',
      subtitle: (
        <div>
          <a href="https://www.twitter.com/EricaCooksey" target="_blank">
            Erica Cooksey
          </a>{' '}
          from{' '}
          <a
            href="https://www.eaze.com/careers"
            target="_blank"
          >
            Eaze
          </a>
        </div>
      ),
      videoUrl: 'https://www.youtube.com/embed/EwMqU_EF8Uw',
      content: (
        <div>
          <p>
            Many companies use React JS for their website and would like to reuse that code in their mobile apps. This talk will cover identifying the best candidates for shared code, sharing both UI components and UI-less business logic, and using React Native in both greenfield and brownfield apps.
          </p>
          <p>Presented at Reactathon 2018 in San Francisco.</p>
          <p style={{ fontSize: 14 }}>
            After working for large companies including Amazon and WalmartLabs, Erica joined Eaze as the first Android engineer. She is excited about building Eaze's mobile technology from the ground up! Erica lives in San Jose and spends most of her free time training and competing in powerlifting and Brazilian jiu jitsu.
          </p>
        </div>
      ),
      specialties: ['react', 'react-native']
    }}
  </Talk>
);

export default TalkImplementation;
