// find the sum of all numbers in an array
const arr = [3, 10, 8, 1, 12];

// Approach 1: Using array reduce method
const sumNumbersViaReduce = (nums) => {
  const sum = nums.reduce((total, current) => total + current, 0);
  console.log('Sum of numbers (via reduce):', sum);
}

// Approach 2: Using a for loop
const sumNumbersViaForLoop = (nums) => {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  console.log('Sum of numbers (via for loop):', sum);
}

// Call the functions to find the sum of numbers
sumNumbersViaReduce(arr);
sumNumbersViaForLoop(arr);