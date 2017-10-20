import React from 'react';
import { NavLink } from 'react-router-dom';

class MainNav extends React.Component {
  render(){
    return (
      <nav>
        <NavLink exact to="/">Home</NavLink>
        <NavLink to="/music">Music</NavLink>
      </nav>
    );
  }
}

export default MainNav;
