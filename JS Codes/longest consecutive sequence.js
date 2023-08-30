/*
https://leetcode.com/problems/longest-consecutive-sequence/description/
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

 

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
Example 2:

Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9 
*/

/*
Approach:

1. if array length = 0 or 1 return 0 or 1
2. sort the array
3. declare 2 vars, temp, max both to 1
4. traverse the array and compare 2 elements. 
5. if they are same - do nothing
6. if the 2nd elem is consecutive, increment temp and assign the max of temp and max to max
7. else just initialize the temp to 1

*/

var longestConsecutive = function(nums) {
    var currmax = 1;
    var maxsofar = 1;
    nums.sort(function(a, b){return a - b});
    console.log(nums);
    if(nums.length === 0)
    return 0;
    else if(nums.length===1)
    return 1;
    for(var i= 1 ; i<nums.length; i++){
        if(nums[i-1] === nums[i]){
            continue;        
        }
        else if(nums[i-1]+1 === nums[i]){
            currmax+=1;
            maxsofar = Math.max(currmax,maxsofar);
        }
        else{
            currmax = 1;
        }

        console.log(currmax,maxsofar)

    }
    return maxsofar;
};


