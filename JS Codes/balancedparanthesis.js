/**
 * @param {string} s
 * @return {boolean}
 * 
 * Hint 1 ---  for all open brackets - push it in stack 
 *          for all close brackets - check the index of it in close array and then 
 *           compare open array index with last element. if it matches - pop else return false
 * 
 * Hint 2 ---- 
 */
var isValid = function(s) {
    // var stack = [];
    // var open = ['{','(','['];
    // var close = ['}',')',']'];
    // for(var i of s){
    //     if(open.includes(i)){
    //         stack.push(i);
    //     }
    //     else if(close.includes(i)){
    //         var index = close.indexOf(i);
    //         if(open[index] === stack[stack.length-1]){
    //             stack.pop();
    //         }
    //         else{
    //             return false;
    //         }
    //     }
    // }
    // return !stack.length;
    const stack = [];
    
    for (let c of s){
        switch(c) {
            case '(': stack.push(')');
                break;
            case '[': stack.push(']');
                break;
            case '{': stack.push('}');
                break;
            default:
                if (c !== stack.pop()) {
                    return false;
                }
        }
    }
    
    return stack.length === 0;
};

console.log(isValid('(){[]}'));