import React, { Component } from 'react';
import './AlgorithmTypes.scss';

import AlgorithmWorker from '../../AlgorithmWorker/AlgorithmWorker';

import { quickSort } from '../../algorithms/quickSort/quickSort'

class AlgorithmTypes extends Component {

  constructor() {
    super();
    this.state = {
      arrayData: (new Array(100000)).fill(0).map((v, i, array) => array.length - i),
      status: 'idle',
      elapsedTime: 0,
    };
  }

  componentDidMount() {
    this.initData();
    quickSort((new Array(100)).fill(0));
  }

  initData() {
    const algorithmWorker = new AlgorithmWorker(AlgorithmWorker.workers.QUICK_SORT, data => {
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
          <span>Status: </span>
          <span>{this.state.status}</span>
        </div>
        <div>
          <span>Elapsed Time: </span>
          <span>{this.state.elapsedTime}ms</span>
        <div>
          {this.state.arrayData.toString()}
        </div>
        </div>
      </div>
    );
  }
}

export default AlgorithmTypes;
