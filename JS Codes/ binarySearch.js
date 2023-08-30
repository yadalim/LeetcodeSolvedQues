/* RECURSION */

function binarySearch(left,right,array,number){
    if(left>right){
        return -1;
    }
    while(left<=right){
        var midpoint = Math.round((left+right)/2);
        if(array[midpoint] === number){
            return [1, midpoint];
        }
        else if(number < array[midpoint]){
            right = midpoint-1;
            binarySearch(left,right,array,number);
        }
        else if(number > array[midpoint]){
            left = midpoint+1;
            binarySearch(left,right,array,number);
        }
    }
    return -1;
}
var array = [2,5,7,17,34,68];
var number = 3;
var op = binarySearch(0,array.length-1,array,number);
console.log(op);

/* ANOTHER APPROACH SIMPLY USING WHILE LOOP*/
function binarySearch(arr, x) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] === x) {
        return mid; // element found at index mid
      } else if (arr[mid] < x) {
        left = mid + 1; // search right half
      } else {
        right = mid - 1; // search left half
      }
    }
    return -1; // element not found in array
  }
  
  