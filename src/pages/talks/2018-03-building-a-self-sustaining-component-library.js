import React from 'react';

import Talk from './_talk';

const TalkImplementation = () => (
  <Talk>
    {{
      id: 'building-a-self-sustaining-component-library',
      subtitle: (
        <div>
          <a href="https://www.twitter.com/davidwells" target="_blank">
            David Wells
          </a>{' '}
          from{' '}
          <a href="https://www.serverless.com" target="_blank">
            Serverless
          </a>
        </div>
      ),
      videoUrl: 'https://www.youtube.com/embed/cIAE4bbYNsc',
      content: (
        <div>
          <p>
            Design systems are an extremely efficient way to scale out a
            scalable frontend solution across multiple teams in a large (or
            growing) organization. Come and learn how to building an internal
            component library & design system can help your company ship and
            iterate faster. This talk will cover how David has built multiple
            design systems and will run through the protips and pitfalls learned
            along the way. TLDR; It’s easier than you think to create a
            scalable, maintainable UI library + Design system with React.
          </p>
          <p>Presented at Reactathon 2018 in San Francisco.</p>
          <p style={{ fontSize: 14 }}>
            David Wells is a full stack developer at Serverless, Inc. in San
            Francisco. He is passionate about developer experience and creating
            products that are powerful and easy to use. His previous roles
            include lead UI/UX developer at Mulesoft and founder of Inbound Now,
            an open source marketing software platform. He specialized in Full
            stack JavaScript, HTML, CSS, Marketing, & UI/ UX.
          </p>
        </div>
      ),
      specialties: ['react']
    }}
  </Talk>
);

export default TalkImplementation;
