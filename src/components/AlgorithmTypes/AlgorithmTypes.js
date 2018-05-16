import React, { Component } from 'react';
import './AlgorithmTypes.css';

import AlgorithmWorker from '../../AlgorithmWorker/AlgorithmWorker';
import { insertionSort } from './../../algorithms/insertionSort';

class AlgorithmTypes extends Component {

  constructor() {
    super();
    this.state = {
      arrayData: (new Array(100000)).fill(0).map((v, i, array) => array.length - i)
    };
    this.initData();
    // this.initDataBlock();
  }

  initData() {
    const algorithmWorker = new AlgorithmWorker(insertionSort, result => {
      this.setState({ arrayData: result });
    });
    algorithmWorker.startAlgorithm(this.state.arrayData);
  }

  initDataBlock() {
    this.setState({ arrayData: insertionSort(this.state.arrayData) });
  }

  render() {
    return <div className="AlgorithmTypes">{this.state.arrayData.toString()}</div>
  }
}

export default AlgorithmTypes;
