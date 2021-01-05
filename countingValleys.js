function countingValleys(steps, path) {
    // Write your code here
    let lvl = 0;
    let inTheValley = false;
    let valleyCount = 0;

    for(let i = 0; i < steps; i++) {
        if(path[i] === 'U') {
            lvl += 1;
        } else {
            lvl -= 1;
        }

        if(!inTheValley && lvl < 0) {
            inTheValley = true;
            valleyCount++;
        }

        if(inTheValley && lvl == 0) {
            inTheValley = false;
        }
    }

    return valleyCount;
}

console.log(countingValleys(8, 'UDDDUDUU'));