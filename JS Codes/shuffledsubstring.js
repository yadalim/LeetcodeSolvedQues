/*check whether string1 is shuffled substring in string2. 
eg: s1: onetwofour s2: hifourtwoonehello*/

function check(){

var str1 = 'onetwofoour';
var str2 = "hellofourtwooneworld" ;

if(str1.length<str2.length){
    for(var i=0; i<str1.length; i++){
        if(str2.indexOf(str1[i]) === -1){
            return -1;
        }
    }
    return 0;
}
else{
    return -1;
}
}

var op = check();
console.log(op);