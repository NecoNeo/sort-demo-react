import nativeWorker from '../algorithms/native.worker.js';
import insertionSortWorker from '../algorithms/insertionSort/insertionSort.worker.js';
import quickSortWorker from '../algorithms/quickSort/quickSort.worker.js'


class AlgorithmWorker {

  static workers = {
    USE_JS_BUILT_IN_SORT: nativeWorker,
    INSERTION_SORT: insertionSortWorker,
    QUICK_SORT: quickSortWorker
  };

  processing = false;

  constructor(Worker, callback) {
    this.callback = callback;
    this.worker = new Worker();
    this.worker.onmessage = event => {
      this.onmessageHandler(event);
    };
  }

  startAlgorithm(array) {
    if (this.processing) return;
    this.worker.postMessage({
      array: array
    });
  }

  stopAlgorithm() {
    this.worker.terminate();
  }

  onmessageHandler(event) {
    if (event.data.messageType === 'finished') {
      this.callback({
        result: event.data.result,
        elapsedTime: event.data.elapsedTime
      });
    }
  }
}

export default AlgorithmWorker;