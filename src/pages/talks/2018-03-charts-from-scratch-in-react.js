import React from 'react';

import Talk from './_talk';

const TalkImplementation = () => (
  <Talk>
    {{
      id: 'charts-from-scratch-in-react',
      subtitle: (
        <div>
          <a href="https://twitter.com/americanwombat" target="_blank">
            Christina Holland
          </a>{' '}
          from{' '}
          <a href="https://www.pepperdata.com/" target="_blank">
            Pepperdata
          </a>
        </div>
      ),
      videoUrl: 'https://www.youtube.com/embed/OWRW6u8puXs',
      content: (
        <div>
          <p>
            With all the great charting libraries out there, why would you want
            to roll your own charts from scratch? Sometimes you want more
            control, or your use case is so simple you can avoid bringing in an
            unneeded dependency, or maybe you just want to strip away the magic
            for a moment and learn how the browser's drawing APIs really work.
            We'll go over some examples of building charts with basic HTML, SVG
            and Canvas.
          </p>
          <p>Presented at Reactathon 2018 in San Francisco.</p>
          <p style={{ fontSize: 14 }}>
            Christina works on the dashboard team at Pepperdata, building apps
            to help users get a handle on what's going on with their complex
            distributed systems. This is her third career after biotech and
            animation. She likes elegant puzzle solutions, pretty and intuitive
            UI, and data visualizations that make complex things simple.
          </p>
        </div>
      ),
      specialties: ['react']
    }}
  </Talk>
);

export default TalkImplementation;
