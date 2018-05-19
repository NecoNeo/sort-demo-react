import Worker from '../algorithms/insertionSort.worker.js';


class AlgorithmWorker {

  processing = false;
  startDate = null;
  endDate = null;

  constructor(algorithm, callback) {
    // this.algorithm = algorithm;
    this.callback = callback;
    console.log(Worker);
    this.worker = new Worker();
    this.worker.onmessage = event => {
      this.onmessageHandler(event);
    };
  }

  startAlgorithm(array) {
    if (this.processing) return;
    this.startDate = new Date();
    this.worker.postMessage({
      array: array
    });
  }

  stopAlgorithm() {
    this.worker.terminate();
  }

  onmessageHandler(event) {
    if (event.data.messageType === 'finished') {
      this.endDate = new Date();
      // console.log('elapsed time: ', this.endDate.getTime() - this.startDate.getTime(), 'ms');
      this.callback({
        result: event.data.result,
        elapsedTime: this.endDate.getTime() - this.startDate.getTime()
      });
    }
  }
}

export default AlgorithmWorker;