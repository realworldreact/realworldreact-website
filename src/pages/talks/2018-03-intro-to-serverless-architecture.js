import React from 'react';

import Talk from './_talk';

const TalkImplementation = () => (
  <Talk>
    {{
      id: 'intro-to-serverless-architecture',
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
      videoUrl: 'https://www.youtube.com/embed/RkHFJrsx1QA',
      content: (
        <div>
          <p>
            The 'Serverless Architecture' has become massively popular this
            year, and for the right reasons. It’s zero-administration nature and
            pay-per-execution pricing model enable developers to manage less
            infrastructure and build more than ever. So what are developers
            actually building with it? David will explore different use cases
            for building microservices with Serverless technology. The talk will
            include real world serverless examples from companies & the open
            source world.
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
      specialties: ['serverless-framework', 'aws-lambda']
    }}
  </Talk>
);

export default TalkImplementation;
