import React from 'react';

import Talk from './_talk';

const TalkImplementation = () => (
  <Talk>
    {{
      id: 'css-in-react',
      subtitle: (
        <div>
          <a href="https://www.twitter.com/joeseifi" target="_blank">
            Joe Seifi
          </a>{' '}
          from{' '}
          <a href="https://www.eventbrite.com/careers/" target="_blank">
            Eventbrite
          </a>
        </div>
      ),
      videoUrl: 'https://www.youtube.com/embed/XJjlgEo_0js',
      content: (
        <div>
          <p>
            React has no standard way to style components. A slew of ideas and frameworks have grown out of the community. But, with so many CSS in JS solutions, how do you know which one to choose? In this talk, I will cover five different ways to style your React projects, and the pros and cons of each approach. From CSS Modules with SASS to Styled Components, you’ll learn how each library works so that you know which one(s) best fits your needs.
          </p>
          <p>
            Presented at Reactathon 2018 in San Francisco.
          </p>
          <p style={{ fontSize: 14 }}>
            Joe Seifi is a senior software engineer at Eventbrite in San Francisco. Previously he worked at Trulia, Apple, and Disney on various web projects.
          </p>
        </div>
      ),
      specialties: ['react', 'jsx']
    }}
  </Talk>
);

export default TalkImplementation;
