// Complete the countApplesAndOranges function below.
function countApplesAndOranges(s, t, a, b, apples, oranges) {

    let applesFall = apples.map(x => x + a).filter(x => (x >= s && x <= t));
    let orangesFall = oranges.map(x => x + b).filter(x => (x >= s && x <= t));;

    console.log(applesFall.length);
    console.log(orangesFall.length);
}

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);