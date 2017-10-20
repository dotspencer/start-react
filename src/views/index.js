import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render(){
    return (
      <div className="content">
        <h1 className="title">Start with React</h1>
      </div>
    );
  }
}

var root = document.querySelector('#root');
ReactDOM.render(<App/>, root);
