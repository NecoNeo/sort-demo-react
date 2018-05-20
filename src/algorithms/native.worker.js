// use javascript built in sort

// Worker

onmessage = function(event) {
  const startDate = new Date();
  const result = event.data.array.sort((a, b) => a - b);
  const elapsedTime = (new Date()) - startDate;
  postMessage({
    messageType: 'finished',
    result,
    elapsedTime
  });
}