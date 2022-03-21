/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, start = 0, end = arr.length -1) {

  function swap(arr, idx1, idx2) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  }

  const pivot = arr[start];
  let pivotIdx = start;

  for (let i = start; i <= end; i++) {
    if (arr[i] < pivot) {
      pivotIdx++;
      swap(arr, pivotIdx, i);
    }
  }

  swap(arr, start, pivotIdx);
  return pivotIdx;
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr, left = 0, right = arr.length -1) {

if (left >= right) return arr;

  const pivotIdx = pivot(arr, left, right);

  quickSort(arr, left, pivotIdx - 1);
  quickSort(arr, pivotIdx + 1, right);

  return arr;
}

module.exports = { pivot, quickSort };
