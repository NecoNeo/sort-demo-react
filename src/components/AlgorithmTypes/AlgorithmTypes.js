import React, { Component } from 'react';
import './AlgorithmTypes.scss';

import AlgorithmWorker from '../../AlgorithmWorker/AlgorithmWorker';
import BaseButton from '../BaseButton/BaseButton';

class AlgorithmTypes extends Component {

  constructor() {
    super();
    this.state = {
      arrayData: (new Array(100000)).fill(0).map((v, i, array) => array.length - i),
      status: 'idle',
      elapsedTime: 0,
    };
    this.startAlgorithm = this.startAlgorithm.bind(this);
  }

  componentDidMount() {
    this.initData();
  }

  initData() {
    this.startAlgorithm();
  }

  startAlgorithm() {
    if (this.state.status === 'sorting') return;
    let algorithmWorker = new AlgorithmWorker(AlgorithmWorker.workers.QUICK_SORT, data => {
      this.setState({
        arrayData: data.result,
        status: 'finished',
        elapsedTime: data.elapsedTime
      });
    });
    this.setState({
      status: 'sorting'
    });
    algorithmWorker.startAlgorithm(this.state.arrayData);
  }

  render() {
    return (
      <div className="AlgorithmTypes">
        <div>
          <BaseButton onClick={this.startAlgorithm} type={(this.state.status === 'sorting') ? 'disabled': ''}>Hello</BaseButton>
        </div>
        <div>
          <span>Status: </span>
          <span>{this.state.status}</span>
        </div>
        <div>
          <span>Elapsed Time: </span>
          <span>{this.state.elapsedTime}ms</span>
        <div>
          {/* {this.state.arrayData.toString()} */}
        </div>
        </div>
      </div>
    );
  }
}

export default AlgorithmTypes;
