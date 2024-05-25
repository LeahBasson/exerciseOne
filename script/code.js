function isPalindrome(word) {

    // Remove non-alphanumeric characters and convert to lowercase
  
    const cleanedStr = word.replace(/[\W_]/g, '').toLowerCase();
  
  
    // Split the word into an array of characters, reverse it, and join it back into a string
  
    const reversedStr = cleanedStr.split('').reverse().join('');
  
  
  
    // Check if the reversed word is equal to the original cleaned string
  
    return reversedStr === cleanedStr;
  
  }
  
  
  // Example usage:
  
  console.log(isPalindrome("Level")); 
  
  console.log(isPalindrome("Hello, World!")); 

