//https://www.hackerrank.com/challenges/sparse-arrays/problem?h_r=next-challenge&h_v=zen

function matchingStrings(strings, queries) {

    let result = [];
    

    for(let i = 0; i < queries.length; i++) {

        result[i] = 0;

        for(let j = 0; j < strings.length; j++) {

            if(strings[j] === queries[i]) result[i] += 1;

        }

    }

    return result;
}

console.log(matchingStrings(['aba', 'baba', 'aba', 'xzxb'], ['aba', 'xzxb', 'ab']));
console.log(matchingStrings(['def', 'de', 'fgh'], ['de', 'lmn', 'fgh']));
console.log(matchingStrings(['abcde', 'sdaklfj', 'asdjf', 'na', 'basdn', 'sdaklfj', 'asdjf', 'na', 'asdjf', 'na', 'basdn', 'sdaklfj', 'asdjf'],  ['abcde', 'sdaklfj', 'asdjf', 'na', 'basdn']));