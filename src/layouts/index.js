import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'react-jss';

import './styles/normalize.min.css';
import './styles/flexboxgrid.min.css';
import './styles/fonts.css';
import './styles/global.css';

import favicon from '../assets/favicon.ico';
import createTheme from './createTheme';
import ThemedStyles from './ThemedStyles';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <link rel="shortcut icon" href={favicon} />
      <link
        rel="stylesheet"
        href="//cdn.materialdesignicons.com/2.1.19/css/materialdesignicons.min.css"
      />
      <link
        rel="stylesheet"
        href="//fonts.googleapis.com/css?family=Neuton:400,400i"
      />
    </Helmet>
    <ThemeProvider theme={createTheme()}>
      <ThemedStyles>{children()}</ThemedStyles>
    </ThemeProvider>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
