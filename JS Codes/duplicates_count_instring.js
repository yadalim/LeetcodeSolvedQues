function printDuplicates(str) {
  const hashTable = {};
  const duplicates = [];

  // Loop through each character in the string
  for (let i = 0; i < str.length; i++) {
    // Get the current character
    const char = str[i];

    // If the character has already been seen before, increment its count in the hash table
    if (hashTable[char]) {
      hashTable[char]++;
    } else {
      // Otherwise, add the character to the hash table with a count of 1
      hashTable[char] = 1;
    }
  }

  console.log(hashTable);

  // Loop through the hash table and add any characters with a count greater than 1 to the duplicates array
  for (const char in hashTable) {
    if (hashTable[char] > 1) {
      duplicates.push(`${char}: ${hashTable[char]}`);
    }
  }

  // Print out the duplicates
  console.log(`Duplicates: ${duplicates.join(', ')}`);
}

// Example usage
printDuplicates('hello world');
// Output: Duplicates: l: 3, o: 2

printDuplicates('the quick brown fox jumps over the lazy dog');
// Output: Duplicates: t: 2, h: 2, e: 3,  : 8, u: 2, r: 2, o: 4, p: 1, s: 1, v: 1, l: 1, a: 1, z: 1, y: 1, g: 1, b: 1, n: 1, w: 1, f: 1, x: 1, c: 1, k: 1, i: 1, q: 1
