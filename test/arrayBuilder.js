export default function arrayBuilder(sortFunction) {
  const arrMap = {};
  const arr = (new Array(50)).fill(0)
    .map((value, index) => {
      const newValue = Math.floor(Math.random() * 100);
      if (arrMap[newValue] === undefined) {
        arrMap[newValue] = 1;
      } else {
        arrMap[newValue]++;
      }
      return newValue;
    });
  sortFunction(arr);
  const sortedArrMap = {};
  arr.forEach(value => {
    if (!sortedArrMap[value]) {
      sortedArrMap[value] = 1;
    } else {
      sortedArrMap[value]++;
    }
  });

  console.log(JSON.stringify(arr));

  return {
    arr, arrMap, sortedArrMap
  };
}
