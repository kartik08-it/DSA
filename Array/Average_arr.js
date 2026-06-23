const arr = [3, 30, 34, 5, 9];

// Approach 1: Using array reduce method to calculate average
const averageNumber = (nums) => {
  const sum = nums.reduce((total, current) => total + current, 0);
  const average = sum / nums.length;
  console.log('Average of numbers:', average);
}

// approach 2: Using a for loop to calculate average
const averageNumberViaForLoop = (nums) => {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  const average = sum / nums.length;
  console.log('Average of numbers (via for loop):', average);
}

// Call the functions to find the average of numbers
averageNumber(arr);
averageNumberViaForLoop(arr);