import React from 'react';

import Talk from './_talk';

const TalkImplementation = () => (
  <Talk>
    {{
      id: 'type-safe-react-with-reasonml',
      subtitle: (
        <div>
          <a href="https://www.twitter.com/jaredforsyth" target="_blank">
            Jared Forsyth
          </a>{' '}
          from{' '}
          <a href="https://www.khanacademy.org/careers" target="_blank">
            Khan Academy
          </a>
        </div>
      ),
      videoUrl: 'https://www.youtube.com/embed/_thVZKhdgaM',
      content: (
        <div>
          <p>
            Types can be invaluable when working on a large project, by making
            refactoring less error-prone, enabling better coordinating between
            teammates, and improving readability. Reason gives you a powerful,
            battle-tested type system with cross-file inference, macros, and
            excellent JavaScript interop. Come learn what differentiates it from
            added-on type systems like Flow and TypeScript, what it looks like
            to build React UIs in Reason, and what makes it easy to start into
            and integrate with your current JavaScript app.
          </p>
          <p>Presented at Reactathon 2018 in San Francisco.</p>
          <p style={{ fontSize: 14 }}>
            Jared interned on the React Native team, rewrote the React devtools,
            and has given several talks on React & related technologies. He
            works at Khan Academy on the mobile team, using React Native along
            side native Java and Swift. He loves type systems and learning new
            languages, and is deeply invested in improving the experience of
            programming for everyone.
          </p>
        </div>
      ),
      specialties: ['reasonml', 'react']
    }}
  </Talk>
);

export default TalkImplementation;
