/*
Move zeroes to the end of the array and other elements should be in the same order 

without making a copy of the array.

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]

*/

//because 0's are in the end of the array loops the array through backwards and vice versa

var moveZeroes = function(nums) {
    var count = 0;
    for(var i=nums.length-1; i>=0; i--){
        if(nums[i]===0){
            nums.splice(i,1);
            nums.push(0);
        }
    }
};

//Another approac but it takes 2 loops which came to my mind first i.e looping forwards
var moveZeroes = function(nums) {
    var count = 0;
    var i = 0;
    while(i<nums.length){
        if(nums[i]===0){
            count+=1;
            nums.splice(i,1);
            i--;
        }
        i++;
    }
        while(count>0){
            nums.push(0);
            count-=1;
        }  
};