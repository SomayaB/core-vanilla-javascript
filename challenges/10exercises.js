// // 1. Define a function max() that takes two numbers as arguments and returns the largest of them.
function max(number1, number2) {
  if (number1 > number2) {
    return number1;
  }
  if (number2 > number1) {
    return number2;
  }
  if (number1 === number2) {
    return "The two numbers are equal."
  }
}
// // Use the if-then-else construct available in Javascript. ??(Wouldn't work for equal)
//
// // 2. Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
  function maxOfThree(number1, number2, number3) {
    return Math.max(number1, number2, number3);
  }
//
// // 3. Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
function isVowel(character) {
  var vowels = ['a','e','i', 'o', 'u']

  if (vowels.indexOf(character) !== -1){
    return true;
  } else {
    return false;
  }
};



// 4. Write a function translate() that will translate a text into "rövarspråket".
// That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".

function translate(text) {
  var vowels = ['a','e','i', 'o', 'u', ' ']
  // string
  // turn the string into an array
  var textArray = text.split('')

  // check for consonant
  for (i=0; i < textArray.length; i++) {

    if (vowels.indexOf(textArray[i]) === -1) {
    //'consonant' + 'o' + 'consonant'

    textArray[i] = textArray[i] + 'o' + textArray[i]

    }
  }
  // turn back to a string
  return translatedText = textArray.join('');

}



// 5. Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers.
// For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.

  function sum(numbers) {
    var total = 0;
    for (var i = 0; i < numbers.length; i++) {
      total = total + numbers[i];
    }
    return total;
  };


  function multiply(numbers) {

      var total = 1;
      for (var i = 0; i < numbers.length; i++) {
          total = total * numbers[i];
      }
      return total;
  }



// Define a function reverse() that computes the reversal of a string.
// For example, reverse("jag testar") should return the string "ratset gaj".

// Represent a small bilingual lexicon as a Javascript object in the following fashion
//{"merry":"god", "christmas":"jul", "and":"och", "happy":gott", "new":"nytt", "year":"år"}
//and use it to translate your Christmas cards from English into Swedish.

//Write a function findLongestWord() that takes an array of words and returns the length of the longest one.

//Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.

//Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
