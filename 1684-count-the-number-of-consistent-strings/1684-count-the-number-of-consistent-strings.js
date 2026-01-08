/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
    // let letters = allowed.split("");

    let count = 0;
    for(let i = 0; i < words.length; i++) {
        let bool = true;
        for(let j = 0; j < words[i].length; j++) {
            if(!allowed.includes(words[i][j])) {
                bool = false;
                break;
            }
        }
        if(bool) {
            count++;
        }
    }
    return count;
};