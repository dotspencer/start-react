import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route, NavLink, Link} from 'react-router-dom';

// Components
import MainNav from './components/main-nav';
import HomePage from './components/home-page';
import MusicPage from './components/music-page';

class App extends React.Component {
  render(){
    return (
      <Router>
        <div>
          <div className="top">
            <div className="title">Start with React</div>
            <MainNav/>
          </div>
          <div className="content">
            <Route exact path="/" component={HomePage}/>
            <Route path="/music" component={MusicPage}/>
          </div>
        </div>
      </Router>
    );
  }
}

var root = document.querySelector('#root');
ReactDOM.render(<App/>, root);
