import React from 'react';

import Talk from './_talk';

const TalkImplementation = () => (
  <Talk>
    {{
      id: 'from-imperative-to-declarative',
      subtitle: (
        <div>
          <a href="https://medium.com/@featherart" target="_blank">
            Feather Knee
          </a>{' '}
          from{' '}
          <a href="http://www.nvidia.com/object/careers.html" target="_blank">
            NVIDIA
          </a>
        </div>
      ),
      videoUrl: 'https://www.youtube.com/embed/34BKJmaa8VQ',
      content: (
        <div>
          <p>
            There are often many ways to solve the same problem. This talk
            explores two different approaches, imperative and declarative. We
            will look at code samples and discuss the relative merits of each,
            starting with vanilla JS then moving to more concrete examples in
            JSX.
          </p>
          <p>Presented at Reactathon 2018 in San Francisco.</p>
          <p style={{ fontSize: 14 }}>
            Feather started her career at Accenture as a technical consultant in
            various Silicon Valley companies including Sun Microsystems, Robert
            Half, and Electronic Arts. She went on to work as a Java developer
            for various startups that didn’t survive the first dot.com meltdown.
            After this she left the tech world to have a career as a working
            artist for several years. She returned to teach a web development
            bootcamp in both NYC and SF for General Assembly. She then went on
            to work as a full stack developer at Netflix for the next few years,
            and is now a front end developer at Nvidia. She lives in San Jose
            with her partner and the cutest dog on earth.
          </p>
        </div>
      ),
      specialties: ['react', 'functional-programming']
    }}
  </Talk>
);

export default TalkImplementation;
