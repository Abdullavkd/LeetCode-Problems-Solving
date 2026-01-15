/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let ans = 0;
    for(let i = 0; i < s.length; i++) {
        let I = 1;
        let V = 5;
        let X = 10;
        let L = 50;
        let C = 100;
        let D = 500;
        let M = 1000;
        if(s[i] == "I") {
            ans+=I
        }else if(s[i] == "V") {
            if(s[i-1] == "I") {
                ans+= (V-I*2)
            }
            else ans+=V
        }else if(s[i] == "X") {
            if(s[i-1] == "I") {
                ans+=(X-I*2)
            }
            else ans+=X
        }else if(s[i] == "L") {
            if(s[i-1] == "X"){
                ans+=(L-X*2)
            }
            else ans+=L
        }else if(s[i] == "C") {
            if(s[i-1] == "X") {
                ans+=(C-X*2)
            }
            else ans+=C
        }else if(s[i] == "D") {
            if(s[i-1] == "C") {
                ans+=(D-C*2)
            }
            else ans+=D
        }else if(s[i] == "M") {
            if(s[i-1] == "C") {
                ans+=(M-C*2)
            }
            else ans+=M
        }
    }
    return ans;
};