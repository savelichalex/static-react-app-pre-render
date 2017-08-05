import React from 'react';
import ReactDOM from 'react-dom/server';
import Responsive from './Responsive';
import App from './App';

const styles = `
  #root-desktop {
    display: block;
  }

  @media screen and (max-device-width: 700px) {
    #root-desktop {
      display: none;
    }
  }

  #root-mobile {
    display: none;
  }

  @media screen and (max-device-width: 700px) {
    #root-mobile {
      display: block;
    }
  }
`;

const Template = ({ desktop, mobile }) => (
  <html>
    <head>
      <meta charSet="UTF-8" />
      <meta name="title" content="Test" />
      <style>
        {styles}
      </style>
    </head>
    <body>
      <div
        id="root-desktop"
        dangerouslySetInnerHTML={{ __html: desktop }}
      />
      <div
        id="root-mobile"
        dangerouslySetInnerHTML={{ __html: mobile }}
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
      desktop={
        ReactDOM.renderToString(
          <Responsive mode={Responsive.MODES.DESKTOP}>
            <App />
          </Responsive>
        )
      }
      mobile={
        ReactDOM.renderToString(
          <Responsive mode={Responsive.MODES.MOBILE}>
            <App />
          </Responsive>
        )
      }
    />
  )
);
