import { lighten, darken } from 'polished';

export default () => ({
  palette: {
    primary: {
      base: '#36a7ee',
      dark: darken(0.1, '#36a7ee'),
      light: lighten(0.1, '#36a7ee'),
      contrastText: '#fff'
    },
    secondary: {
      base: '#fffd41',
      contrastText: '#242424'
    },
    text: {
      base: '#2b3642',
      dark: darken(0.1, '#2b3642'),
      light: lighten(0.1, '#2b3642'),
      contrastText: '#fff'
    },
    alert: {
      base: '#e85c3b',
      contrastText: '#fff'
    },
    inverted: {
      base: '#242424',
      contrastText: '#fff'
    },
    black: {
      base: '#fff',
      contrastText: '#242424'
    }
  },
  typography: {
    primary: '"GT Walsheim", sans-serif',
    secondary: '"Georgia", "Neuton", sans-serif'
  }
});
