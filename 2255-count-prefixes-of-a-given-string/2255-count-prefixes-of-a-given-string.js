/**
 * @param {string[]} words
 * @param {string} s
 * @return {number}
 */
var countPrefixes = function(words, s) {
    let n = 0;
    for(let i = 0; i < words.length; i++) {
        let bool = true;
        for(let j = 0; j < words[i].length; j++) {
            if(words[i][j] != s[j]) {
                bool = false;
            }
        }
        if(bool) {
            n++;
        }
    }
    return n;
};