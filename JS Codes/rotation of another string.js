/* Input: S1 = ABCD, S2 = CDAB
Output: Strings are rotations of each other

Input: S1 = ABCD, S2 = ACBD
Output: Strings are not rotations of each other */

//Simple approach - concatenate the string1+string1 and find the index for string2 in concatenated string 

var string1 = "ABCDE";
var string2 = "DABC"

var temp = string1+string1;

if(string1.length===string2.length){
    console.log(temp.indexOf(string2)!== -1);
}
else{
    console.log(-1);
}