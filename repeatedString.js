function repeatedString(s, n) {
    let repsPerString = 0;

    for(let i = 0; i < s.length; i++) {
        if(s[i] === 'a') {
            repsPerString++;
        }
    }

    let stringLengthInNTimes = Math.floor(n / s.length);
    let leftPart = n % s.length;

    let totalReps = repsPerString * stringLengthInNTimes;

    for(let j = 0; j < leftPart; j++) {
        if(s[j] === 'a') {
            totalReps++;
        }
    }

    return totalReps;
}

let t1 = repeatedString('aba', 10);
let t2 = repeatedString('a', 1000000000000);
let t3 = repeatedString('kmretasscityylpdhuwjirnqimlkcgxubxmsxpypgzxtenweirknjtasxtvxemtwxuarabssvqdnktqadhyktagjxoanknhgilnm', 736778906400); // expected: 51574523448
let t4 = repeatedString('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 534802106762); // expected: 534802106762
let t5 = repeatedString('epsxyyflvrrrxzvnoenvpegvuonodjoxfwdmcvwctmekpsnamchznsoxaklzjgrqruyzavshfbmuhdwwmpbkwcuomqhiyvuztwvq', 549382313570); // expected: 16481469408
console.log(t1, t2, t3, t4, t5);