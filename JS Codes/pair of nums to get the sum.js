/*
array = [1,2,4,4]
num = 8
pair of nums that can add up to the given num

array = [1,3,4,2]
num = 9
o/p - nothing

*/
/* returning indices for two sum  ------ O(n) 
[3,2,4]
target - 6

create a hashmap
loop through all elements 
find the complement i.e diff between target and current element 
if complement is present in hashmap, return that and current element
add the current element and its index and hashmap

*/
var twoSum = function(nums, target) {
    const map = new Map();
    for(let i=0; i<nums.length; i++){
        const complement = target - nums[i];
        if(map.has(complement))
            return [map.get(complement), i];
        map.set(nums[i], i);
    }
    return [];
    
};

console.log(twoSum([3,2,4],6));


//brute force - O(n^2)

function getSum() {

    let arr1 = [1,2,4,2];
    let num = 8;
    
    for(var i=0; i<arr1.length; i++){
        for(var j=0; j<arr1.length; j++){
            if(i!==j && arr1[i]+arr1[j] === num){
                return [arr1[i], arr1[j]];
            }
        }
    }
    return -1;
    
    }