import React from 'react';

import Talk from './_talk';

const TalkImplementation = () => (
  <Talk>
    {{
      id: 'incremental-migration-to-graphql',
      subtitle: (
        <div>
          <a href="https://www.twitter.com/stubailo" target="_blank">
            Sashko Stubailo
          </a>{' '}
          from{' '}
          <a href="https://www.apollographql.com/" target="_blank">
            Apollo GraphQL
          </a>
        </div>
      ),
      videoUrl: 'https://www.youtube.com/embed/UqL96doEAV4',
      content: (
        <div>
          <p>
            GraphQL is quickly becoming mainstream as one of the best ways to
            get data into your React application. When we see people modernize
            their app architecture and move to React, they often want to migrate
            their API to GraphQL as part of the same effort. But while React is
            super easy to adopt in a small part of your app at a time, GraphQL
            can seem like a much larger investment. In this talk, we’ll go over
            the fastest and most effective ways for React developers to
            incrementally migrate their existing APIs and backends to GraphQL,
            then talk about opportunities for improvement in the space. If
            you’re using React and are interested in GraphQL, but are looking
            for an extra push to get it up and running at your company, this is
            the talk for you!
          </p>
          <p>Presented at Reactathon 2018 in San Francisco.</p>
          <p style={{ fontSize: 14 }}>
            Sashko has been working on open source developer tools for the last
            5 years. Most recently he has been leading open source GraphQL tool
            development at Apollo, after writing the very first versions of
            Apollo Client. Previously, he has worked on JavaScript build
            tooling, reactive UI frameworks, and data visualization.
          </p>
        </div>
      ),
      specialties: ['graphql']
    }}
  </Talk>
);

export default TalkImplementation;
