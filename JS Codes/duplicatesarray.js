/*
Input: nums = [1,2,3,1]
Output: true
*/


var containsDuplicate = function(nums) {
    var map = new Map();
    for(var i of nums){
        if(map.get(i) != undefined){
            return true
        }
        map.set(i, 1);
    }
    return false;
};