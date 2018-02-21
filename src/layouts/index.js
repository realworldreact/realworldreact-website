import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { ThemeProvider } from 'react-jss';

import './styles/normalize.css';
import './styles/fonts.css';
import './styles/global.css';
import favicon from '../assets/favicon.ico';
import createTheme from './createTheme';
import ThemedStyles from './ThemedStyles';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet>
      <link rel='shortcut icon' href={favicon} />
    </Helmet>
    <ThemeProvider theme={createTheme()}>
      <ThemedStyles>
        {children()}
      </ThemedStyles>
    </ThemeProvider>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
