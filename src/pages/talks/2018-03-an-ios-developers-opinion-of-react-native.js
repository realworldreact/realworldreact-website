import React from 'react';

import Talk from './_talk';

const TalkImplementation = () => (
  <Talk>
    {{
      id: 'an-ios-developers-opinion-of-react-native',
      subtitle: (
        <div>
          <a href="https://www.twitter.com/htormey" target="_blank">
            Harry Tormey
          </a>{' '}
          from{' '}
          <a href="https://www.launchdrawer.com" target="_blank">
            LaunchDrawer
          </a>
        </div>
      ),
      videoUrl: 'https://www.youtube.com/embed/6anak6P_3Z8',
      content: (
        <div>
          <p>
            The promise of writing code for iOS and having it “just work” out of
            the box on Android is a tempting one. That along with hot reloading
            code and the ability to push over the air updates to published apps
            make React Native a tempting proposition. This sounds too good to be
            true so what’s the catch? React Native is a framework for building
            native apps using Javascript. Many native developers rightly
            associate hybrid Javascript apps with disappointing consumer
            experiences and frustrating development environments. Over the years
            the same promises have been made by many other Javascript based
            frameworks, so why is React Native any different? This talk will be
            from the perspective of an experienced iOS developer who has been
            working with React Native for the last 2 years and has shipped
            several cross platform apps with it.
          </p>
          <p>Presented at Reactathon 2018 in San Francisco.</p>
          <p style={{ fontSize: 14 }}>
            Harry is an iOS developer who is very enthusiastic about React
            Native. Currently he works as a mobile contractor with various
            companies. In the past he’s worked as a Software Engineer at
            Facebook, Apple and a number of startups you've probably never heard
            of.
          </p>
        </div>
      ),
      specialties: ['react-native', 'react', 'redux', 'swift', 'obj-c']
    }}
  </Talk>
);

export default TalkImplementation;
