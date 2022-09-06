/***********************************************************************
Write a function `firstLastCap(sentence)` that takes in a sentence and
returns a new sentence where the first and last letters of each word is
uppercase. All other characters should be lowercase.

Examples:

firstlastcap('hello bootcamp prep'); // =>'hello bootcamp prep'
firstLastCap('what is on the radio'); // =>'WhaT IS ON ThE RadiO'
***********************************************************************/

function firstLastCap(sentence) {
  let arr_sent = sentence.split(' ');
  let result = [];

  for (let i = 0; i < arr_sent.length; i++){
    let arr_curr_word = arr_sent[i].split('');

    let first = arr_curr_word.shift().toUpperCase();
    let last = arr_curr_word.pop().toUpperCase();
    let curr_join = arr_curr_word.join('');
    let word = first + curr_join.toLowerCase() + last;

    result.push(word);
  }

  return result.join(' ');
}

console.log(firstLastCap('hello bootcamp prep'));

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = firstLastCap;
