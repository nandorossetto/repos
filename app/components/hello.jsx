import React from 'react';
import ReactDOM from 'react-dom';

import './../styles/app.scss';
 
class Hello extends React.Component {
  constructor(){
    super();
    
  }

  render() {
    return (
      <h1>Hello</h1>
    )
  }
}
 
ReactDOM.render(<Hello/>, document.getElementById('hello'));