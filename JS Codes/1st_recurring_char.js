function recurring (arr){
    var map = new Map();
    for(var i of arr){
        if(map.has(i)){
            return i;
        }
        map.set(i,1);
    }
}

// first recurring  - compare the arrays once 

function firstRecurring(arr){
    var map = new Map();
    for(var i of arr){
        map.set(i,1);
    }
    for(var i of arr){
        if(map.has(i)){
            return i;
        }
    }
    return undefined;
}

console.log(recurring([2,5,1,2,3,5,1,2,4]));   // o/p should be 2 so 1st fn is used

console.log(firstRecurring([2,5,5,2,3,5,1,2,4])); // o/p should be 2 so 2nd fn is used.. if we use 1st fn, op will be 5.