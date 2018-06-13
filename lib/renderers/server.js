import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from 'components/App';

module.exports = () => {
  return ReactDOMServer.renderToString(
    <App />
  );
};
