import React, { Component } from 'react';
import './AlgorithmTypes.css';

import { insertionSort } from './../../algorithms/insertionSort.js'

class AlgorithmTypes extends Component {
  render() {
    return <div class="AlgorithmTypes">{insertionSort([5,2,3,1,4,0])}</div>
  }
}

export default AlgorithmTypes;
