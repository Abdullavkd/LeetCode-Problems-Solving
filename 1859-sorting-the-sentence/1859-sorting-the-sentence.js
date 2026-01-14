/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let arr;
    let one = [];
    let words = s.split(" ");
    for(let i = 0; i < words.length-1; i++) {
        for(let j = i+1; j < words.length; j++) {
            if(Number(words[i][words[i].length-1]) > Number(words[j][words[j].length-1])){
            let temp = words[i];
            words[i] = words[j];
            words[j] = temp;
        }
        }
    }
    for(let i = 0; i < words.length; i++) {
        one[i] = words[i].slice(0, words[i].length -1)
    }
    arr = one.join(" ")
    return arr;
};