const mixer = require('./mixer.js');
function displayMessage() {
    console.log(mixer.countCharacter("What is the color of the sky?", "t"));
    console.log(mixer.capitalizeFirstCharacterOfWords("What is the color of the sky?"));
    console.log(mixer.reverseWord("What is the color of the sky?"));
    console.log(mixer.reverseAllWords("What is the color of the sky?"));
    console.log(mixer.replaceFirstOccurence("What is the color of the sky?", "sky", "water"));
    console.log(mixer.encode("What is the color of the sky?"));
    console.log(mixer.LongestPalindromeInSentance('What is the color of the sky?',0,'What is the color of the sky?'.length -1));
    console.log(mixer.LongestPalindromeInSentance('wabe',0,'wawe'.length -1));
  }
  
  displayMessage();

  mixer = require