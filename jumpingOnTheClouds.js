function jumpingOnClouds(c) {
    let steps = 0;
    let i = 0;

    while(i < c.length-1) {
        if(i + 2 < c.length) {
            if(c[i+2] != 1) {
                i = i+2;
                steps++;
                continue;
            }
        }

        if (i + 1 < c.length) {
            if(c[i+1] != 1) {
                i = i+1;
                steps++;
            }
        }

        console.log('i = ', i);
    }

    return steps;
}

console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0]));