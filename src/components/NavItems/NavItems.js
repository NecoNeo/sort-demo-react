import React, { Component } from 'react';
import './NavItems.scss';

class NavItems extends Component {
  render() {
    return (
      <nav className="nav-items">
        <div className="nav-item">single algorithm analysis</div>
        <div className="nav-item">sort competition</div>
      </nav>
    );
  }
}

export default NavItems;
