var string = "Hi I am a man Manisha";

var obj = {};
var duplicates = [];

//loops through the string

for(var i=0; i<string.length; i++){

    const char = string[i]; //each letter in a string 

    //checks if letter is there in obj

    if(obj[char]){
        obj[char]++;  //if there, increments the count 
    }
    else{
        obj[char] = 1;  //else assigns with count as 1
    }
}

//loops through the obj by key 
for(var i in obj){
    if(obj[i]>1){  // count > 1 , push in the array
        duplicates.push(`${i} : ${obj[i]}`)
    }
}

console.log(duplicates);
