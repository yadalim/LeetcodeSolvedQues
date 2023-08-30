function reverseString(string){
    var result = '';
    for(var i=string.length-1; i>=0; i--){
        result+= string[i];
    }
    return result;
}

console.log(reverseString('Manisha'));

// Another Easy Way string.split() - array & array.reverse() & again join()
                    //  [...str] is same as string.split('')
console.log('Manisha'.split('').reverse().join(''));