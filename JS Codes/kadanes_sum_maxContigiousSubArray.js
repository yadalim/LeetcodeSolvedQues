/*
Input:
N = 5
Arr[] = {1,2,3,-2,5}
Output:
9
Explanation:
Max subarray sum is 9
of elements (1, 2, 3, -2, 5) which 
is a contiguous subarray.

Input:
N = 4
Arr[] = {-1,-2,-3,-4}
Output:
-1
Explanation:
Max subarray sum is -1 
of element (-1)
*/
//Function to find the sum of contiguous subarray with maximum sum.
function maxSubarraySum(arr, N){
    var currMax = 0;
    var maxSoFar = 0;  //initialise both curr max and max so far to 0
    // code here
    for (var i = 0; i < N; i++) {
        currMax += arr[i];   //add each element to currMax
        if (currMax < 0) {    // if there are negative numbers, it become negative, so reassign it to 0
            currMax = 0;
        }
        if (currMax > maxSoFar) {   //if currMax is greater than maxsofar, assign it to maxsofar
            maxSoFar = currMax;
        }
    }
    if (maxSoFar === 0) return Math.max(...arr);  //if all are negative numbers, maxsofar will be 0, but reassign it to maximum number in array
    return maxSoFar;
}




