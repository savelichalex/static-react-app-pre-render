import React from 'react';
import ReactDOM from 'react-dom/server';
import App from './App';

const Template = ({ body }) => (
  <html>
    <head>
      <meta charSet="UTF-8" />
      <meta name="title" content="Test" />
    </head>
    <body>
      <div
        id="root"
        dangerouslySetInnerHTML={{ __html: body }}
      />
      <script>
        window.A = true;
      </script>
      <script src="dist/bundle.js"></script>
    </body>
  </html>
);

console.log(
  ReactDOM.renderToStaticMarkup(
    <Template
      body={ReactDOM.renderToString(<App />)}
    />
  )
);
