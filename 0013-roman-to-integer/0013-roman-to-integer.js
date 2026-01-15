/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let ans = 0;
    // let I = 1;
    let keys = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    }
        // let V = 5;
        // let X = 10;
        // let L = 50;
        // let C = 100;
        // let D = 500;
        // let M = 1000;

    // for(let i = 0; i < s.length; i++) {
    //     if(s[i] == "I") {
    //         ans+=I
    //     }else if(s[i] == "V") {
    //         if(s[i-1] == "I") {
    //             ans+= (V-I*2)
    //         }
    //         else ans+=V
    //     }else if(s[i] == "X") {
    //         if(s[i-1] == "I") {
    //             ans+=(X-I*2)
    //         }
    //         else ans+=X
    //     }else if(s[i] == "L") {
    //         if(s[i-1] == "X"){
    //             ans+=(L-X*2)
    //         }
    //         else ans+=L
    //     }else if(s[i] == "C") {
    //         if(s[i-1] == "X") {
    //             ans+=(C-X*2)
    //         }
    //         else ans+=C
    //     }else if(s[i] == "D") {
    //         if(s[i-1] == "C") {
    //             ans+=(D-C*2)
    //         }
    //         else ans+=D
    //     }else if(s[i] == "M") {
    //         if(s[i-1] == "C") {
    //             ans+=(M-C*2)
    //         }
    //         else ans+=M
    //     }
    // }

    for(let i = 0; i < s.length; i++) {
        if(s[i] == "V" && s[i-1] == "I" || s[i] == "X" && s[i-1] == "I" || s[i] == "L" && s[i-1] == "X" || s[i] == "C" && s[i-1] == "X" ||s[i] == "D" && s[i-1] == "C" || s[i] == "M" && s[i-1] == "C") {
            ans -= keys[s[i-1]] *2;
        }
        ans+=keys[s[i]]
    }
    return ans;
};