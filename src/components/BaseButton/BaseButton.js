import React, { Component } from 'react';
import './BaseButton.scss';

class BaseButton extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onClick(e);
  }

  render() {
    let className = 'base-button';
    if (this.props.type === 'danger') {
      className += ' danger';
    } else if (this.props.type === 'disabled') {
      className += ' disabled';
    }
    return (
      <button className={className} onClick={this.handleClick}>
        {this.props.children}
      </button>
    );
  }
}

export default BaseButton;