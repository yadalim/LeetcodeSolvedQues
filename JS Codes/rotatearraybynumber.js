//Rotate array to the right by given length

var rotate = function (nums, k) {
    var i = nums.length - 1;
    while (i >= nums.length - 1 && k != 0) {
        nums.unshift(nums[i]);
        nums.pop();
        k--;
    }
    return nums;
    };

var rotate1 = function (nums,k){
    //reversing an array
    var k = k % nums.length;  //because if k is greater than array length it should take array length as k instead of original
    // we are doing mod to take the least value in k or array.length
    var start = 0;
    var end = nums.length -1;
    reverseArray(nums,start, end); // [4,3,2,1]
    reverseArray(nums,start,k-1);
    reverseArray(nums,k,end);
    return nums;

    function reverseArray(nums, start, end){
        while(start<end){
            var temp = nums[start];
            nums[start] = nums[end];
            nums[end] = temp;
            start++;
            end--;
        }
    }
}


console.log(rotate1([1,2,3,4,6],7));