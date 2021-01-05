function rotateLeft(d, arr) {
    let count = d;

    while(count > 0) {

        arr.push(arr.shift());

        count--;
    }

    return arr;
}

console.log(rotateLeft(4, [1,2,3,4,5]));