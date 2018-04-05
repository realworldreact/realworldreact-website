import React from 'react';

import Talk from './_talk';

const TalkImplementation = () => (
  <Talk>
    {{
      id: 'intro-to-graphql',
      subtitle: (
        <div>
          <a href="https://www.twitter.com/jnwng" target="_blank">
            Jon Wong
          </a>{' '}
          from{' '}
          <a href="https://about.coursera.org/careers/" target="_blank">
            Coursera
          </a>
        </div>
      ),
      videoUrl: 'https://www.youtube.com/embed/yfhRHknHwrM',
      content: (
        <div>
          <p>
            GraphQL is a declarative query language that is revolutionizing how
            we think about the data in our applications — it helps make
            accessing APIs from both the client and the server an absolute
            breeze. Come learn the basics of GraphQL and how you can use it
            today!
          </p>
          <p>Presented at Reactathon 2018 in San Francisco.</p>
          <p style={{ fontSize: 14 }}>
            Jon is an engineer on the Frontend Infrastructure team at Coursera
            where he works to help developers focus on the problem at hand:
            building a world-class learning experience! He's been using GraphQL
            for over a year and loves using it for every product he builds and
            is looking forward to share the joy of GraphQL with as many people
            as he can!
          </p>
        </div>
      ),
      specialties: ['graphql']
    }}
  </Talk>
);

export default TalkImplementation;
