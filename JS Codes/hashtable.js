class HashTable {
  constructor(size){
    this.data = new Array(size);
  }

  _hash(key) {   // _ represents private although anyone can access it
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
  }

  set(key, value){
    const index = this._hash(key);
    this.data[index] = [key,value];
  }

  get(key){
    const index = this._hash(key);
    return this.data[index];
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
myHashTable.get('grapes')
myHashTable.set('apples', 9)
console.log(myHashTable.get('apples'));

var nums = [0,3,1];
nums.sort(
    function(a,b)
     { 
         return a-b;
         }
         );
console.log(nums);