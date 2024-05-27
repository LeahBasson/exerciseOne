function isPalindrome(word) {

    // Remove non-alphanumeric characters and convert to lowercase
  
    const inputWord = word.replace(/[\W_]/g, '').toLowerCase();
  
  
    // Split the word into an array of characters, reverse it, and join it back into a string
  
    const reversedWord = inputWord.split('').reverse().join('');
  
  
  
    // Check if the reversed word is equal to the input word
  
    return reversedWord === inputWord;
  
  }
  
  
  // Example usage:
  
  console.log(isPalindrome("Level")); 
  
  console.log(isPalindrome("Hello, World!")); 

