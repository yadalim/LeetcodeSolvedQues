/**Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
Example 2:

Input: s = "rat", t = "car"
Output: false
**/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
	s = s.split("").sort().join();
	t = t.split("").sort().join();
	return s === t;
};

var isAnagram = function (s, t) {
	if (t.length !== s.length) return false;
	const counts = {};
	for (let c of s) {
		counts[c] = (counts[c] || 0) + 1;   //if key not there in obj, it willl be undefined so assigning 0
	}
	for (let c of t) {
		if (!counts[c]) return false;
		counts[c]--;
	}
	console.log(counts);
	for (let charCount in counts) {
		if (counts[charCount] !== 0) {
			return false;
		}
	}
	return true;
};
