// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
    let pairs = 0;
    let toPair = [];

    for(var i = 0; i< n; i++) {

        console.log(ar[i]);

        let pairMatched = false;
        for(var j = 0; j < toPair.length; j++) {

            if(ar[i] == toPair[j]) {
                pairs += 1;
                toPair[j] = -1;
                pairMatched = true;
                break;
            }

        }

        if(!pairMatched) toPair.push(ar[i]);

        if(toPair.length == 0) {
            toPair.push(ar[i]);
            continue;
        }
    }

    return pairs;
}

const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
console.log('There are pairs: ', sockMerchant(9,ar));