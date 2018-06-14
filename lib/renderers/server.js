import React from 'react';
import ReactDOMServer from 'react-dom/server';
import axios from 'axios';
import StateApi from 'state-api';

import App from 'components/App';
import config from 'config';

const serverRender = async () => {
  const resp = await axios.get(`http://${config.host}:${config.port}/data`);
  const rawData = resp.data.data;
  const store = new StateApi(rawData);

  return {
    initialMarkup: ReactDOMServer.renderToString(<App store={store}/>),
    initialData: rawData
  };
};

export default serverRender;