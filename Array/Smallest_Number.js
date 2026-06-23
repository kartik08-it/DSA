// find smallest number from the array

const arr = [3,10,8,1,12];

// Approach 1: Using Math.min() with the spread operator
const smallestNumberViaMathOperator = (nums) => {
  const smallestNum = Math.min(...nums);
  console.log('Smallest number (via Math.min):', smallestNum);
}

// Approach 2: Using array reduce method
const smallestNumberViaReduce = (nums) => {
  const smallestNum = nums.reduce((min, current) => (current < min ? current : min), nums[0]);
  console.log('Smallest number (via reduce):', smallestNum);
}

// Approach 3: Using a for loop
const smallestNumberViaForLoop = (nums) => {
  let smallestNum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < smallestNum) {
      smallestNum = nums[i];
    }
  }
  console.log('Smallest number (via for loop):', smallestNum);
}

// Call the functions to find the smallest number
smallestNumberViaMathOperator(arr);
smallestNumberViaReduce(arr);
smallestNumberViaForLoop(arr);
