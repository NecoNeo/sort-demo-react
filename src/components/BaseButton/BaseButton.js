import React, { Component } from 'react';
import './BaseButton.scss';

class BaseButton extends Component {

  static classNameTypes = {
    DANGER: 'danger',
    DISABLED: 'disabled'
  }

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onClick(e);
  }

  getClassName() {
    let className = 'base-button';
    for (const type in BaseButton.classNameTypes) {
      if (BaseButton.classNameTypes[type] === this.props.type) {
        className += ' ' + BaseButton.classNameTypes[type];
        break;
      }
    }
    return className;
  }

  render() {
    return (
      <button className={this.getClassName()} onClick={this.handleClick}>
        {this.props.children}
      </button>
    );
  }
}

export default BaseButton;