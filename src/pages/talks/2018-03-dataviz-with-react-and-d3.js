import React from 'react';

import Talk from './_talk';

const TalkImplementation = () => (
  <Talk>
    {{
      id: 'dataviz-with-react-and-d3',
      subtitle: (
        <div>
          <a href="https://www.swizec.com" target="_blank">
            Swizec Teller
          </a>{' '}
          from{' '}
          <a href="https://www.yup.com/" target="_blank">
            Yup Technologies
          </a>
        </div>
      ),
      videoUrl: 'https://www.youtube.com/embed/9JvIyz7uB2s',
      content: (
        <div>
          <p>
            React can make your D3 amazing. Want to animate 20,000 elements with React? I'll show you. Want to build a complex dataviz? You'll know how. Want to write maintainable dataviz components that you can reuse in any project? I gotchu, fam. This talk shows you everything I've learned about creating reusable and maintainable graphical components over 3 years of hammering away at the question: 'Jeez D3 sure is hard to learn, how do we make this easier?'
          </p>
          <p>
            Presented at Reactathon 2018 in San Francisco.
          </p>
          <p style={{ fontSize: 14 }}>
            Hi I'm Swizec, a geek with a hat. Rumor has it my bird is more popular these days than my hat 🤔 I’ve made some books and courses on web development and working on more. Been doing JavaScript since before jQuery was cool and building my first React component back in 2015 blew my mind.
          </p>
        </div>
      ),
      specialties: ['react', 'jsx', 'd3']
    }}
  </Talk>
);

export default TalkImplementation;
