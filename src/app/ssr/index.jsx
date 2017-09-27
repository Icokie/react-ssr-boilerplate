import React from 'react';
import ReactDomServer from 'react-dom/server';
import App from '../client/components/App';

const component = ReactDomServer.renderToString(<App/>);

export default component;
