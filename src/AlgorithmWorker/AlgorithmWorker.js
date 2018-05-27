import nativeWorker from '../algorithms/native.worker.js';
import insertionSortWorker from '../algorithms/insertionSort/insertionSort.worker.js';
import quickSortWorker from '../algorithms/quickSort/quickSort.worker.js'


class AlgorithmWorker {

  static workers = {
    USE_JS_BUILT_IN_SORT: nativeWorker,
    INSERTION_SORT: insertionSortWorker,
    QUICK_SORT: quickSortWorker
  };

  _processing = false;
  _distroyed = false;

  constructor(Worker, callback) {
    this._callback = callback;
    this._worker = new Worker();
    this._worker.onmessage = event => {
      this._onmessageHandler(event);
    };
  }

  startAlgorithm(array) {
    if (this._processing || this._distroyed) return;
    this._worker.postMessage({
      array: array
    });
  }

  destroy() {
    this._distroyed = true;
    this._worker.terminate();
  }

  _onmessageHandler(event) {
    if (event.data.messageType === 'finished') {
      this._callback({
        result: event.data.result,
        elapsedTime: event.data.elapsedTime
      });
      this.destroy();
    }
  }
}

export default AlgorithmWorker;