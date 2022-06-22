// Helper function
function reverseString(word) {
  return word.split("").reverse().join("");
}

function isPalindrome(word) {
  // Write your algorithm here
  // reversing the input string
  const reversedWord = reverseString(word);
  // comparing the reversed string with the input. This should tell us whether true or not
  if (word === reversedWord){
    return true
  } else {
    return false
  }
}

/* 
  Add your pseudocode here
 In this, the given string should be reversed.
 If the reversed string is the same as the original string
  then the returned value is true
 else if not the same
 returned value should be false 

*/

/*
  Add written explanation of your solution here
  create an array from the  string
 the next step should be to create a string from this reversed array (for example; "mom" to "mom" and "robot" to "tobor")
 return the reversed string
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("gig"));

  console.log("");
}

module.exports = isPalindrome;