import React from 'react';
import ReactDOM from 'react-dom';

import Responsive, { getCurrentMode, MODES } from './Responsive';
import App from './App';

const mode = getCurrentMode();

console.warn(mode);

if (mode === MODES.DESKTOP) {
  ReactDOM.render(
    <Responsive mode={Responsive.MODES.DESKTOP}>
      <App />
    </Responsive>,
    document.getElementById('root-desktop')
  );
} else {
  ReactDOM.render(
    <Responsive mode={Responsive.MODES.MOBILE}>
      <App />
    </Responsive>,
    document.getElementById('root-mobile')
  );
}
