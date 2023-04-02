function hasTargetSum(arr, target) {
  const seen = new Set();

  for (let i = 0; i < arr.length; i++) {
    const complement = target - arr[i];
    if (seen.has(complement)) {
      return true;
    }
    seen.add(arr[i]);
  }

  return false;
}

console.log(hasTargetSum([3, 8, 12, 4, 11, 7], 10)); // true
console.log(hasTargetSum([1, 2, 3, 4, 5], 10)); // true
console.log(hasTargetSum([1, 2, 3, 4, 5], 7)); // true
console.log(hasTargetSum([1, 2, 3, 4, 5], 8)); // false

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  iterate from the beginning of the string to the end of the array
  compare the number we're iterating over to the corresponding number at the end of the array
  if the letters add up to target, return false
  if any two numbers add up to target, return true
*/

/*
  Add written explanation of your solution here
  // Create an empty set to store the values we have seen so far
  // Loop through the array and check if the complement of each value has been seen before
  // If the complement has been seen before, we have found two numbers that add up to the target
  // Otherwise, add the current value to the set of seen values and continue looping
  // If we have looped through the entire array without finding a match, the target sum is not possible
 // Test the function with some examples
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
