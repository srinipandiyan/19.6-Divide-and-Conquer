function findRotatedIndex(arr, num) {
    let pivot = pivotPoint(arr);
    let result = -1;

    if (pivot > 0 && num >= arr[0] && num <= arr[pivot - 1]) {
      result = binarySearch(arr, num, 0, pivot - 1);
    } else {
      result = binarySearch(arr, num, pivot, arr.length - 1);
    }

    return result;
}

function binarySearch(arr, num, start, end) {
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
  
      if (arr[mid] === num) {
        return mid;
      } else if (num < arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
  
    return -1;
}

function pivotPoint(arr) {
    let start = 0;
    let end = arr.length - 1;
  
    while (start < end) {
      let mid = Math.floor((start + end) / 2);
  
      if (arr[mid] > arr[mid + 1]) {
        return mid + 1;
      } else if (arr[start] <= arr[mid]) {
        start = mid + 1;
      } else {
        end = mid;
      }
    }
  
    return 0;
}

module.exports = findRotatedIndex