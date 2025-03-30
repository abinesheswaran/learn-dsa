function mergeTwoArrays(array1, array2) {
  let a1Index = 0;
  let a2Index = 0;
  const finalArray = [];
  while (a1Index < array1.length && a2Index < array2.length) {
    if (array1[a1Index] < array2[a2Index]) {
      finalArray.push(array1[a1Index]);
      a1Index++;
    } else {
      finalArray.push(array2[a2Index]);
      a2Index++;
    }
  }
  finalArray.push(...array1.slice(a1Index));
  finalArray.push(...array2.slice(a2Index));
  return finalArray;
}

function mergesort(array) {
  if (array.length < 2) {
    return array;
  }
  const mid = Math.floor(array.length / 2);
  const left = mergesort(array.slice(0, mid));
  const right = mergesort(array.slice(mid));
  return mergeTwoArrays(left, right);
}
module.exports = mergesort;

