import React, { Component } from 'react';
import './AlgorithmTypes.css';

import AlgorithmWorker from '../../AlgorithmWorker/AlgorithmWorker';
import { insertionSort } from './../../algorithms/insertionSort';

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
  }

  initData() {
    const algorithmWorker = new AlgorithmWorker(insertionSort, data => {
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

  initDataBlock() {
    this.setState({ arrayData: insertionSort(this.state.arrayData) });
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
          {/* {this.state.arrayData.toString()} */}
        </div>
      </div>
    );
  }
}

export default AlgorithmTypes;
