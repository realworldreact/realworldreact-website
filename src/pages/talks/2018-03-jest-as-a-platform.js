import React from 'react';

import Talk from './_talk';

const TalkImplementation = () => (
  <Talk>
    {{
      id: 'jest-as-a-platform',
      subtitle: (
        <div>
          <a href="https://www.twitter.com/rogeliog" target="_blank">
            Rogelio Guzman
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
      videoUrl: 'https://www.youtube.com/embed/ZJ43STkmK-4',
      content: (
        <div>
          <p>
            Jest is a testing framework that has a big emphasize on development experience. We will talk about how Jest can become a platform and how you can leverage it to enhance your existing tooling. Putting your tool on top of Jest, allows you to benefit from its infrastructure, which provides a watch mode, Git integration, etc.
          </p>
          <p>Presented at Reactathon 2018 in San Francisco.</p>
          <p style={{ fontSize: 14 }}>
            Rogelio is an engineer at Docker. He loves to code and is part of the Jest core team.
          </p>
        </div>
      ),
      specialties: ['jest', 'react']
    }}
  </Talk>
);

export default TalkImplementation;
