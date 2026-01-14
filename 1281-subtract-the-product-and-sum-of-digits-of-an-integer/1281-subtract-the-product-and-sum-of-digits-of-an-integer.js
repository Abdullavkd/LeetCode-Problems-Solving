/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function(n) {
    let num = Array.from(String(n), Number)
    let multiple = 1;
    let sum = 0;
    for(let i = 0; i < num.length; i++) {
        multiple*=num[i]
    }
    for(let i = 0; i < num.length; i++) {
        sum += num[i]
    }
    return multiple - sum;
};