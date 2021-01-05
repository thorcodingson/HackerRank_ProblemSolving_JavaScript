function birthdayCakeCandles(candles) {
    // Write your code here
    let setOfCandles = new Set(candles);
    let biggestValue = Array.from(setOfCandles).sort((a,b)=>b-a)[0];

    let tallestCandles = candles.filter(x => x == biggestValue);
    console.log(tallestCandles.length);
    //console.log(tallestCandles);
}

birthdayCakeCandles([3, 2, 1, 3]);