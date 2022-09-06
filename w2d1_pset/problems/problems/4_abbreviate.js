/***********************************************************************
Write a function `abbreviate(sentence)` that takes in a sentence string
and returns a new sentence where words longer than 4 characters have
their vowels removed. Assume the sentence has all lowercase characters.
Feel free to use the array below in your solution:

var vowels = ['a', 'e', 'i', 'o', 'u'];

Examples:

abbreviate('bootcamp prep is fun'); // => 'btcmp prep is fun'
abbreviate('programming is fantastic'); // => 'prgrmmng is fntstc'
abbreviate('hello world'); // => 'hll wrld'
abbreviate('how are you'); // => 'how are you'
***********************************************************************/

function del_vowels(word){
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let unvoweled = '';

  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])){
      continue;
    } else {
      unvoweled += word[i];
    }
  }

  return unvoweled;
}

function abbreviate(sentence) {
  let arr_sentence = sentence.split(' ');
  let result = [];

  for (let i = 0; i < arr_sentence.length; i++) {
    if (arr_sentence[i].length > 4) {
      result.push(del_vowels(arr_sentence[i]));
    } else {
      result.push(arr_sentence[i]);
    }
  }

  return result.join(' ');

}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
 module.exports = abbreviate;
