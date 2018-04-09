import React from 'react';

import Talk from './_talk';

const TalkImplementation = () => (
  <Talk>
    {{
      id: 'serverless-side-rendering-with-aws-and-parceljs',
      subtitle: (
        <div>
          <a href="https://www.twitter.com/brianleroux" target="_blank">
            Brian LeRoux
          </a>{' '}
          from{' '}
          <a href="https://www.begin.com" target="_blank">
            Begin.com
          </a>
        </div>
      ),
      videoUrl: 'https://www.youtube.com/embed/3rxj8TiN3K4',
      content: (
        <div>
          <p />
          <p>Presented at Reactathon 2018 in San Francisco.</p>
          <p style={{ fontSize: 14 }}>
            Brian is a former member of the Adobe PhoneGap team and helped to
            foster the Apache Cordova project. He is also responsible for wtfjs.
            Lately he has been botbuilding on the cloud with begin.com and
            hacking on Architect (https://arc.codes), a project of the
            JavaScript Foundation (JSF).
          </p>
        </div>
      ),
      specialties: ['react', 'aws-lambda']
    }}
  </Talk>
);

export default TalkImplementation;
