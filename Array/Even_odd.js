// find even and odd numbers from an array
const arr = [3, 10, 8, 1, 12];

// Approach 1: Using array filter method
const evenNumbersViaFilter = (nums) => {
  const evenNums = nums.filter(num => num % 2 === 0);
  console.log('Even numbers (via filter):', evenNums);
}

const oddNumbersViaFilter = (nums) => {
  const oddNums = nums.filter(num => num % 2 !== 0);
  console.log('Odd numbers (via filter):', oddNums);
}

// Approach 2: Using a for loop
const evenNumbersViaForLoop = (nums) => {
  const evenNums = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      evenNums.push(nums[i]);
    }
  }
  console.log('Even numbers (via for loop):', evenNums);
}

const oddNumbersViaForLoop = (nums) => {
  const oddNums = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 !== 0) {
      oddNums.push(nums[i]);
    }
  }
  console.log('Odd numbers (via for loop):', oddNums);
}

// Call the functions to find even and odd numbers
evenNumbersViaFilter(arr);
oddNumbersViaFilter(arr);
evenNumbersViaForLoop(arr);
oddNumbersViaForLoop(arr);  