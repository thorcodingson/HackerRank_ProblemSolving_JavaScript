// Complete the kangaroo function below.
function kangaroo(x1, v1, x2, v2) {

    // if one of the kangaroos is placed forward and is faster
    if(x1 > x2 && v1 > v2) {
        return "NO";
    }

    if(x2 > x1 && v2 > v1) {
        return "NO";
    }

    // otherwise let them jump
    //while(x1 < 100000000 && x2 < 100000000) {
    for(let i = 0; i < 10000; i++) {
        x1 += v1;
        x2 += v2;

        if(x1 === x2) {
            return "YES";
        }
    }

    return "NO";

}

console.log(kangaroo(0, 3, 4, 2));
console.log(kangaroo(0, 2, 5, 3));
console.log(kangaroo(21, 6, 47, 3));
console.log(kangaroo(1928, 4306, 5763, 4301));
console.log(kangaroo(2081, 8403, 9107, 8400));