import React from 'react';
import Helmet from 'react-helmet';

import { Header } from '../components';

const PodcastPage = () => (
  <div>
    <Helmet>
      <title>Podcast | Real World React</title>
    </Helmet>
    <Header>Podcast</Header>
  </div>
);

export default PodcastPage;
