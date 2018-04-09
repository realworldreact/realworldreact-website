import React from 'react';

import Talk from './_talk';

const TalkImplementation = () => (
  <Talk>
    {{
      id: 'react-based-content-management-with-netlifycms-and-gatsby',
      subtitle: (
        <div>
          <a href="https://www.twitter.com/biilmann" target="_blank">
            Matt Biilmann
          </a>{' '}
          from{' '}
          <a href="https://www.netlify.com/" target="_blank">
            Netlify
          </a>
        </div>
      ),
      videoUrl: 'https://www.youtube.com/embed/YyRwMy59d4M',
      content: (
        <div>
          <p>
            React is most often associated with Single Page Applications, but
            tools like Gatsby, React Static, Phenomic and Cuttlebelle has made
            React hyper-relevant for content driven websites as well. Netlify
            CMS is an open-source project with the goal of building a content
            management UI in React. It works with any static site generator, and
            makes content editors participate in the modern git-centric workflow
            that developers are used to. This talk will show how to use Netlify
            CMS with a Gatsby-based site, to build high-performant and
            infinitely-scalable sites with git-based content editing, a user
            friendly UI, and live browser previews - all without a backend.
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
