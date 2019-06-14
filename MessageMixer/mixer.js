const mixer = {};
let maximum = (x,y) =>{
  return x>  y ?x:y;
} 
mixer.countCharacter = function(inputString, inputCharacter){
    let count = 0;
    let string = inputString.toLowerCase();
    let character = inputCharacter.toLowerCase();
      for (let i = 0; i < string.length; i++) {
        if (string[i] === character) {
           count++;
        }
      }
    return count; 
  };
  
  mixer.capitalizeFirstCharacterOfWords = function(string) {
    let arr = string.split(" ");  
      for (let i = 0; i < arr.length; i++) {  
        let word = arr[i];
          arr[i] = word[0].toUpperCase() + word.substring(1); 
      }
    return arr.join(" "); 
  };
  
  
  mixer.reverseWord = function (word) {
    return word.split("").reverse().join("");
  };
  
  mixer.reverseAllWords =  function(sentence) {
    let words = sentence.split(" ");
      for (let i = 0; i < words.length; i++) {
        words[i] = mixer.reverseWord(words[i]);
      }
     return words.join(" ");
  };
  
  
  mixer.replaceFirstOccurence =  function(string, toBeReplaced, replaceWith) {
    return string.replace(toBeReplaced, replaceWith);
  };
  
  
  mixer.replaceAllOccurrences =  function(string, toBeReplaced, replaceWith) {
    return string.split(toBeReplaced).join(replaceWith);
  };
  
  mixer.encode =  function(string) {
    let replacementObject = { "a": "@", "s": "$", "i": "!", "o":"0" };
      for (let key in replacementObject) {
        string = mixer.replaceAllOccurrences(string, key, replacementObject[key]); 
      }	
      return string;
  };
  mixer.pigLatin = function(sentance,character){
    return sentance.split(' ').join(character +  ' ');
  }
  mixer.palindrome = function(str){
    return `${str} ${mixer.reverseWord(str)}`;
  }
  mixer.isPalindrome = function(str1,str2){
    let string = str1
      .replace(/[^\w]/gi, "") // replace all non-words characters
      .toLowerCase(); // make all characters lower cased
  if (str2) {
    let reversedString = str2
      .replace(/[^\w]/gi, "")
      .toLowerCase()
      .split('') // make an array
      .reverse() // revers the array
      .join(''); // make a string
    return string == reversedString;
  } else {
    return string == string.split('').reverse().join('');
  }
}
  mixer.LongestPalindromeInSentance = function(string,begin,end){
    if(typeof end != 'number' && typeof begin != 'number'){return 'bad input'}
    if(begin === end){
      return 1;
    }
    if(string[begin +1] === string[end]  && begin + 1 == end){
      return 2;
    }

    if(string[begin] === string[end]){
      return mixer.LongestPalindromeInSentance(string,begin +1, end -1) +2;
    }

    return(maximum(mixer.LongestPalindromeInSentance(string,begin,end-1),mixer.LongestPalindromeInSentance(string,begin+1,end)));

  }
  module.exports = mixer;
  
  
