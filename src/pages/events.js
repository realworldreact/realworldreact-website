import React from 'react';
import Helmet from 'react-helmet';

import { Header } from '../components';

const EventsPage = () => (
  <div>
    <Helmet>
      <title>Events | Real World React</title>
    </Helmet>
    <Header>Events</Header>
  </div>
);

export default EventsPage;
