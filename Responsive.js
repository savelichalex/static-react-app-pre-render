import React, { Component } from 'react';
import PropTypes from 'prop-types';

const isStatic = typeof window === 'undefined';

export const MODES = {
  'MOBILE': 'MOBILE',
  'DESKTOP': 'DESKTOP',
};

export const getCurrentMode = (defaultMode) => {
  if (isStatic) {
    return defaultMode;
  } else {
    return window.matchMedia(`screen and (min-device-width: ${701}px)`).matches
      ? MODES.DESKTOP
      : MODES.MOBILE;
  }
};

class Responsive extends Component {
  constructor({ mode: defaultMode }) {
    super();

    this.state = {
      mode: getCurrentMode(defaultMode),
    };
  }

  componentDidMount() {
    const checkMediaQuery = () => {
      const mode = getCurrentMode();
      if (mode !== this.state.mode) {
        this.setState({ mode });
      }
    };

    window.addEventListener('resize', checkMediaQuery);
    checkMediaQuery();
  }

  getChildContext() {
    return {
      mode: this.state.mode,
    };
  }

  render() {
    if (this.props.mode === this.state.mode) {
      return this.props.children;
    }

    return null;
  }
}

Responsive.MODES = MODES;

Responsive.childContextTypes = {
  mode: PropTypes.oneOf(Object.keys(MODES)),
};

export class Desktop extends Component {
  render() {
    if (this.context.mode === MODES.DESKTOP) {
      return this.props.children;
    }
    return null;
  }
}

Desktop.contextTypes = {
  mode: PropTypes.oneOf(Object.keys(MODES)),
};

export class Mobile extends Component {
  render() {
    if (this.context.mode === MODES.MOBILE) {
      return this.props.children;
    }
    return null;
  }
}

Mobile.contextTypes = {
  mode: PropTypes.oneOf(Object.keys(MODES)),
};

export default Responsive;
