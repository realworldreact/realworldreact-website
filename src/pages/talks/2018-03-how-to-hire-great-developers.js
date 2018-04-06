import React from 'react';

import Talk from './_talk';

const TalkImplementation = () => (
  <Talk>
    {{
      id: 'how-to-hire-great-developers',
      subtitle: (
        <div>
          <a href="https://www.twitter.com/SuhaylJobsity" target="_blank">
            Suhayl Rouag
          </a>{' '}
          from{' '}
          <a
            href="https://www.jobsity.com/"
            target="_blank"
          >
            JobSity
          </a>
        </div>
      ),
      videoUrl: 'https://www.youtube.com/embed/ar8vgZhLmJI',
      content: (
        <div>
          <p>
            There is more to hiring great engineers than just looking at their skillset. In this talk, we'll explore some strategies for hiring great engineers by hiring great people.
          </p>
          <p>Presented at Reactathon 2018 in San Francisco.</p>
          <p style={{ fontSize: 14 }}>
            Suhayl Rouag heads business development and sales for Jobsity, a nearshore distributed team software and mobile app development firm based in United States with offices in Ecuador and Colombia and the exclusive partner of Real World React for providing expert remote development services. Before joining Jobsity, Suhayl worked as a contractor for the US Army's General Officer Management Office part of the Office of the Chief of Staff of the US Army. As the senior in house business analyst and developer he helped design and build the talent management processes and applications that the US Army uses to develop, promote and train their senior leaders. After his tenure working with the US Army, he moved with his family to Ecuador where he co-founded a toy company specializing in educational toys for the South American market before joining Jobsity.
          </p>
        </div>
      ),
      specialties: ['react']
    }}
  </Talk>
);

export default TalkImplementation;
