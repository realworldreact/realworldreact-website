import React from 'react';

import Talk from './_talk';

const TalkImplementation = () => (
  <Talk>
    {{
      id: 'a-postgres-backed-graphql-baas',
      subtitle: (
        <div>
          <a href="https://twitter.com/tanmaigo" target="_blank">
            Tanmai Gopal
          </a>{' '}
          from{' '}
          <a
            href="https://www.hasura.io/"
            target="_blank"
          >
            Hasura
          </a>
        </div>
      ),
      videoUrl: 'https://www.youtube.com/embed/neIZcc8y3B0',
      content: (
        <div>
          <p>
            A review of how we created a GraphQL backend backed by Postgres. The key challenges faced by real-world apps and our solution approach, specifically around expressive query arguments, access control, schema iteration, sharing auth between multiple API backends. We will also review some quick tips to make the most out of Postgres and reveal some early performance benchmarks. We will end with a demo how you can create complex data models and make intuitive graphql queries from your app without requiring in-depth knowledge of graphql schemas.
          </p>
          <p>Presented at Reactathon 2018 in San Francisco.</p>
          <p style={{ fontSize: 14 }}>
            Tanmai is the co-founder of hasura.io - a Postgres BaaS + Kubernetes PaaS. He is a StackOverflow powered fullstack, polyglot developer whose areas of interest and work span react, nodejs, python, haskell, docker, postgres, kubernetes. He is passionate about making the power of building things accessible to everyone and is the instructor of India's largest MOOC imad.tech with over 200,000 students. You will occasionally see him speaking, or more often being quietly awkward, at conferences and meetups. He has recently moved to spend time in the Bay Area, just like everyone else.
          </p>
        </div>
      ),
      specialties: ['graphql', 'postgres', 'react']
    }}
  </Talk>
);

export default TalkImplementation;
