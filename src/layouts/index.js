import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'react-jss';

import './index.css';

const theme = {
  colorPrimary: '#36a7ee',
};

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title='Real World React'
    />
    <ThemeProvider theme={theme}>
      <div>
        {children()}
      </div>
    </ThemeProvider>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
