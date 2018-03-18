# RealWorldReact.com

The website for Real World React [realworldreact.com](https://realworldreact.com).

## Setup

Requires [Node.js](http://nodejs.org) v8+ and NPM v5+.

```bash
$ npm install  # Install dependencies
$ npm run develop  # Start development server at http://0.0.0.0:8000
```

Configure in your editor/IDE:

- [eslint](https://eslint.org) with [prettier](https://github.com/prettier/prettier)
- [editorconfig](http://editorconfig.org)

## Architecture

Built with [Gatsby](http://gatsbyjs.org), [React](http://reactjs.org), [JSS](http://cssinjs.org), [Flexbox Grid](http://flexboxgrid.com), and [Validatejs](https://validatejs.org).

Folder structure:

```
src/
  layouts/
  pages/
  assets/
  components/ - Independent/dumb components
    common/ - General components
    forms/ - Forms and control components
    navigation/ - Navigation and organizational components
  containers/ - Components with business logic
  data/ - Data sets or configuration files
    settings.json - Global configuration
  tools/ - Utilities
static/
  images/ - Dynamic images
```

Component structure:

```
/[ComponentName]
  index.js - React component definition
  styles.js - JSS component styles
```

## License

[MIT](./LICENSE)

----

[![Jobsity LLC](./static/images/logos/jobsity.jpg)](https://jobsity.com)

This site was built by [JobSity](https://jobsity.com), the exclusive partner of
Real World React for full-time remote placement of expert React developers. Learn
more about how to get the full-time assistance you need today at
[realworldreact.com/remote-placement](https://realworldreact.com/remote-placement).
