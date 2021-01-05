 function hourglassSum(arr) {
    let sumar = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
    let largest = 0;

    for(let i = 0; i < 4; i++) {

        for(let j = 0; j < 4; j++) {

            sumar[i][j] =   arr[i][j] +     arr[i][j+1] +   arr[i][j+2] +
                                            arr[i+1][j+1] +
                            arr[i+2][j] +   arr[i+2][j+1] +   arr[i+2][j+2];

            if(i == 0 && j == 0) largest = sumar[i][j];
            if(largest < sumar[i][j]) largest = sumar[i][j];

        }

    }

    return largest;
}

const hgarr = [
                [-9, -9, -9,  1, 1, 1],
                [0, -9,  0, 4, 3, 2],
                [-9, -9, -9,  1, 2, 3],
                [0, 0, 8, 6, 6, 0],
                [0, 0, 0, -2, 0, 0],
                [0, 0, 1, 2, 4, 0]
            ];

console.log(hourglassSum(hgarr));