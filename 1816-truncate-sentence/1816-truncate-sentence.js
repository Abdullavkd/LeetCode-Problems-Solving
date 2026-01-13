/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    let sentence = s.split(" ");
    let arr = [];
    for(let i = 0; i < k; i++) {
        arr.push(sentence[i])
    }
    let newS = arr.join(" ")
    return newS;
};