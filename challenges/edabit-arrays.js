// For each of the following challenges, make sure to solve the challenge on edabit AND include your solution code here for review

// 1. Create a function that takes an array of positive and negative numbers. Return an array where the first element is the count of positive numbers and the second element is the sum of negative numbers.
// https://edabit.com/challenge/xXJLZry3vYd4erPct


function countPosSumNeg(nums) {
  var positiveNumbers = []
  var negativeNumbers = []

  var negativeTotal = 0;

  if (nums.length === 0) {
    return [];
  }

  for (var i = 0; i < nums.length; i++) {
    if (nums[i] > 0){
     positiveNumbers.push(nums[i]);
    	}
    }
  positiveNumbersCount = positiveNumbers.length;
  positiveNumbersCountArray = [];
  positiveNumbersCountArray.push(positiveNumbersCount);


    for (var j = 0; j < nums.length; j++) {
    if (nums[j] < 0){
     negativeTotal += nums[j];
    }
  }
  negativeNumbers.push(negativeTotal);

    var positiveNegativeNumbers = positiveNumbersCountArray.concat(negativeNumbers);
		return positiveNegativeNumbers;
}


countPosSumNeg([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]);
countPosSumNeg([92, 6, 73, -77, 81, -90, 99, 8, -85, 34]);
countPosSumNeg([91, -4, 80, -73, -28])
countPosSumNeg([]);




// 2. Create a function that accepts an array and returns the last item in the array. The array can contain any of JavaScript's five primitive data types.
// https://edabit.com/challenge/7JBTN4TbaxJQMdX9W

function getLastItem(arr) {
 return arr[arr.length-1]
}

// 3. Create a function that takes two arrays and combines them by alternatingly taking elements from each array in turn.
// https://edabit.com/challenge/kaNYPQQWHSX4zGNhj
function mergeArrays(a, b) {
    var mergedArray = [];
		var len = Math.max(a.length, b.length)

    for (var i = 0; i < len; i++) {
      if (i < a.length) {
        mergedArray.push(a[i])
      }
      if (i < b.length) {
        mergedArray.push(b[i])
      }
    }
  return mergedArray;

}

// 4. Create a function that takes an array of numbers and remove the smallest value. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array, return an empty array.
// https://edabit.com/challenge/9ukwiKyv8R9NHSt3d
function removeSmallest(arr) {
  var newArray = arr[0];
	arr.forEach(function(number) {
    if (number < newArray){
    	newArray = number;
    }
  });
  arr.splice(arr.indexOf(newArray), 1);

  return arr;
}



// 5. Create a function that takes an array of numbers and returns the sum of the two lowest positive integers. No floats or empty arrays will be used in any of the test cases.
// https://edabit.com/challenge/GNgCfKHWfQwByBNqa

// 6. Create a function that accepts an array of 10 integers (between 0 and 9) and returns a string of those numbers in the form of a phone number.
// https://edabit.com/challenge/Z6oY6EWwT9rde8YXm

// 7. Create a function that takes an array of names and returns an array with the first letter capitalized.
// https://edabit.com/challenge/ZN5cpGPNRS3nrjMo5


// 8. Create a function that takes an array of numbers and returns the  following statistics:Minimum Value, Maximum Value, Sequence Length, Average Value
// https://edabit.com/challenge/gpozv9DbFqrHDmSQZ

// 9. Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.
// https://edabit.com/challenge/h7LTMAFeNz79rXB2Y

// 10. Create a function that takes an object and returns the keys and values as separate arrays.
// https://edabit.com/challenge/AP4hnF97anRc2mAZ6
