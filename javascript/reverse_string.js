function reverseString(str) {
  let reversedStr = '';

  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// And a written explanation of your solution

/*
I need to write a function that takes one input, a string. The function should take the string input and output that same string
in reverse. Ie. Input => 'cat' = Output => 'tac'.

Edge cases:
- String with a single letter: ex. 'a'
- Empty string?? ex. ' '

declare variable set to empty string
iterate through string in reverse order
  for each letter in string, starting with the last letter
  add letter to empty string variable
  */