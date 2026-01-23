/**
 * @param {string[]} words
 * @return {string}
 */
var firstPalindrome = function(words) {
    for(let i = 0; i < words.length; i++) {
        let bool = true;
        for(let j = 0; j < words[i].length/2; j++) {
            if(words[i][j] != words[i][words[i].length-1-j]) {
                bool = false;
            }
        }
        if(bool) {
            return words[i]
        }
    }
    return "";
};