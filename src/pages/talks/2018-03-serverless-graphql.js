import React from 'react';

import Talk from './_talk';

const TalkImplementation = () => (
  <Talk>
    {{
      id: 'serverless-graphql',
      subtitle: (
        <div>
          <a href="https://www.twitter.com/_schickling" target="_blank">
            Johannes Schickling
          </a>{' '}
          from{' '}
          <a href="https://www.graph.cool" target="_blank">
            GraphCool
          </a>
        </div>
      ),
      videoUrl: 'https://www.youtube.com/embed/cS51Zv-x9-k',
      content: (
        <div>
          <p>
            Using GraphQL APIs is by now the default for most React developers.
            But how does a GraphQL backend actually work? This talk gives an
            overview over modern backend development using GraphQL and the
            benefits of serverless deployment workflow.
          </p>
          <p>Presented at Reactathon 2018 in San Francisco.</p>
          <p style={{ fontSize: 14 }}>
            Johannes is CEO and co-founder of Graphcool/Prisma (GraphQL database
            proxy) and is currently based in SF & Berlin. He previously built
            and sold the VR company “Optonaut”. Johannes loves cutting-edge
            technologies and was one of the first adopters of Docker, React &
            GraphQL.
          </p>
        </div>
      ),
      specialties: ['graphql']
    }}
  </Talk>
);

export default TalkImplementation;
