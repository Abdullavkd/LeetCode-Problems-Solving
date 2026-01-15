/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = strs[0];
    let val = "";
    for(let i = 0; i < prefix.length; i++) {
        let status = true;
        for(let j = 1; j < strs.length; j++) {
            if(prefix[i] != strs[j][i]) {
                status = false;
            }
        }
        if(status) val+=prefix[i]
        else break;
    }
    return val;
};