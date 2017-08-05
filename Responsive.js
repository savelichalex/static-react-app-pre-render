import React, { Component } from 'react';
import PropTypes from 'prop-types';

const isStatic = typeof window === 'undefined';

const MODES = {
  'MOBILE': 'MOBILE',
  'DESKTOP': 'DESKTOP',
};

class Responsive extends Component {
  getChildContext() {
    return {

    }
  }

  render() {
    return this.props.children;
  }
}
