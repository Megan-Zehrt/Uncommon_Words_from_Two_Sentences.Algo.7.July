// 884. Uncommon Words from Two Sentences



// A sentence is a string of single-space separated words where each word consists only of lowercase letters.

// A word is uncommon if it appears exactly once in one of the sentences, and does not appear in the other sentence.

// Given two sentences s1 and s2, return a list of all the uncommon words. You may return the answer in any order.





/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {

    let string1 = s1.split(' ')
    let string2 = s2.split(' ')
    
    let dictionary = new Map()

    for(let word of string1){

        if(dictionary.has(word)){
            let count = dictionary.get(word)
            dictionary.set(word, count+1)
        }else{
            dictionary.set(word, 1)
        }
    }

    for(let word of string2){

        if(dictionary.has(word)){
            let count = dictionary.get(word)
            dictionary.set(word, count+1)
        }else{
            dictionary.set(word, 1)
        }
    }

    let array = []

    for(let [word, amount] of dictionary.entries()){

        if(amount <= 1){
            array.push(word)
        }
    }

    return array
};