// find the largest number in an array
const arr = [3, 30, 34, 5, 9];


// Approach 1: Using Math.max() with the spread operator
const largestNumberViaMathOperator = (nums) => {
  const largestNum = Math.max(...nums);
  console.log('Largest number (via Math.max):', largestNum);
}

// Approach 2: Using array reduce method
const largestNumberViaReduce = (nums) => {
  const largestNum = nums.reduce((max, current) => (current > max ? current : max), nums[0]);
  console.log('Largest number (via reduce):', largestNum);
}

// Approach 3: Using a for loop
const largestNumberViaForLoop = (nums) => {
  let largestNum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > largestNum) {
      largestNum = nums[i];
    }
  }
  console.log('Largest number (via for loop):', largestNum);
}

// Call the functions to find the largest number
largestNumberViaMathOperator(arr);
largestNumberViaReduce(arr);
largestNumberViaForLoop(arr);