
const hashMap1 = new Map();
const hashMap2 = new Map([
    [1, "one"],
    [2, "two"],
    [3, "three"]
]);
console.log(hashMap1, hashMap2);

console.log(hashMap2.get(2));
console.log(hashMap2.has(4));
console.log(hashMap2.set(4,'four'));
console.log(hashMap2.has(4));
hashMap2.delete(4);
console.log(hashMap2);
hashMap2.clear();
console.log(hashMap2);
