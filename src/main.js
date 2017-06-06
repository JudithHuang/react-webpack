import ReactDom from 'react-dom';
import Hello from './Hello.jsx';

import React, { Component } from 'react';

export default class Main extends Component {
  render() {
    return <h1>Hello world</h1>;
  }
}

ReactDom.render(<Main />, document.getElementById('root'));