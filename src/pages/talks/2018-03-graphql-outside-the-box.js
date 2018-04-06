import React from 'react';

import Talk from './_talk';

const TalkImplementation = () => (
  <Talk>
    {{
      id: 'graphql-outside-the-box',
      subtitle: (
        <div>
          <a href="https://www.twitter.com/slightlytyler" target="_blank">
            Tyler Martinez
          </a>{' '}
          from{' '}
          <a
            href="https://www.docker.com/careers"
            target="_blank"
          >
            Docker
          </a>
        </div>
      ),
      videoUrl: 'https://www.youtube.com/embed/rb8ccqm7R_8',
      content: (
        <div>
          <p>
            At Docker, we are using GraphQL alongside our existing REST APIs and making it work without a GraphQL server. Instead, we use GraphQL client side, where it serves as the interface to our network layer and the glue that binds our components together. We have taken this approach as a progressive solution to the difficult problem of introducing GraphQL to an existing application stack. By breaking the rules a bit we gain many of the benefits that GraphQL provides immediately while spreading out the implementation over many releases. While a novel approach I also envision a future where running GraphQL on the client is not uncommon. With the advent of blockchain technology and the concept of “dapps” we must reconsider the role of the application that runs on the end user’s device. By running GraphQL on the client we can consume remote GraphQL services, interact directly with the blockchain, browser / native APIs, and more through GraphQL.
          </p>
          <p>Presented at Reactathon 2018 in San Francisco.</p>
          <p style={{ fontSize: 14 }}>
            Tyler is an engineer at Docker working on UI applications. When not writing code you can find him at a beach near his home in San Francisco.
          </p>
        </div>
      ),
      specialties: ['react', 'graphql']
    }}
  </Talk>
);

export default TalkImplementation;
