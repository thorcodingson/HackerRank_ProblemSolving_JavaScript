function diagonalDifference(arr) {
    // Write your code here
    let d0 = 0, d1 = 0;

    for(let i = 0; i < arr.length; i++) {

        d0 = d0 + arr[i][i];
        d1 += arr[(arr.length-1)-i][i];

    }

    return Math.abs(d0-d1);
}

diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]);