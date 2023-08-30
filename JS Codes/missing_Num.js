var missingNumber = function(nums) {
    var n = nums.length;
    return (n*(n+1)/2) - (nums.reduce(function(a, b) { return a + b; }));   
};

//formula ---  N*(N+1) / 2  - SUM(ARR)

console.log(missingNumber([9,6,4,2,3,5,7,0,1]));


const array1 = [[0, 1], [2, 3], [4, 5]];
const result = array1.reduceRight((accumulator, currentValue) => accumulator.concat(currentValue));

